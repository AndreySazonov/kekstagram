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

getRandomInteger(0, 1);
getStringLength('', 140);
