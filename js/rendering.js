import {createNewPosts} from './data.js';

//Контейнер для отрисовки фотографий
const picturesList = document.querySelector('.pictures');

//Шаблон фотографии
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureNewPost = createNewPosts();

const pictureListFragment = document.createDocumentFragment();

pictureNewPost.forEach((post) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictureListFragment.append(pictureElement);
});

picturesList.append(pictureListFragment);
