//////////////////// КОПИРОВАНИЕ ОБЪЕКТОВ ////////////////////
const user = { firstName: 'Artem', age: 32 }
const userCopy = Object.assign({}, user);
// Функция Object.assign получает список объектов и копирует в первый target свойства из остальных. Его также можно использовать для 1-уровневого клонирования объекта
