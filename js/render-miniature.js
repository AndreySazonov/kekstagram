import {createNewPosts} from './data.js';
import {showFullScreen} from './full-screen-view.js';

//Контейнер для отрисовки фотографий
const picturesList = document.querySelector('.pictures');

//Шаблон поста с фотографией
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureNewPost = createNewPosts();

const pictureListFragment = document.createDocumentFragment();

pictureNewPost.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.addEventListener('click', () => {
    showFullScreen(picture);
  });
  pictureListFragment.append(pictureElement);
});

picturesList.append(pictureListFragment);

export {picturesList};
