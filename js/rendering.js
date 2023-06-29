import {createNewPosts} from './data.js';

//Контейнер для отрисовки фотографий
const picturesList = document.querySelector('.pictures');

//Шаблон поста с фотографией
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureNewPost = createNewPosts();

const pictureListFragment = document.createDocumentFragment();

pictureNewPost.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.append(pictureElement);
});

picturesList.append(pictureListFragment);
