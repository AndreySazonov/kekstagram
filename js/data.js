import {getRandomInteger, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USERS_NAMES = [
  'Андрей',
  'Алёна',
  'Александр',
  'Игорь',
  'Семён',
  'Григорий',
  'Наташа',
  'Тимур',
  'Аня',
  'Светлана',
  'Аркадий',
  'Ольга',
  'Валентин',
  'Михаил',
  'Анастасия'
];

const PHOTO_DESCRIPTIONS = [
  'Это шедеврально',
  'Великолепное зрелище',
  'Чудо из чудес',
  'Шоб я так жил',
  'Ля какая красота',
  'Не ну ты видел, видел это',
  'Сносно, в целом пойдёт'
];

//Кол-во новых постов
const NEW_POST_COUNT = 25;

//!Порядковый номер для id, id комментария и url, придумать рандом без повтора
let SERIAL_NUMBER = 0;

const createNewPost = () => {
  SERIAL_NUMBER++;
  return {
    id: SERIAL_NUMBER,
    url: `photos/${SERIAL_NUMBER}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: {
      id: SERIAL_NUMBER,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(USERS_NAMES)
    }
  };
};

const createNewPosts = () => Array.from({length: NEW_POST_COUNT}, createNewPost);

export {createNewPosts};
