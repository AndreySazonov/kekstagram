//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min && min !== String && max !== String) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Исходные данные неверны';
}

//Функция для проверки максимальной длины строки
function getStringLength(someString, maxLength) {
  return someString.length <= maxLength;
}

//Поиск случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция создания элемента с необходимым классом
const makeElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

export {getRandomInteger, getStringLength, getRandomArrayElement, makeElement};

