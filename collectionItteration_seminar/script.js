// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

let book = {
  title: "Горе от ума",
  autor: "Грибоедов",
};

const response = Symbol("response");
const rating = Symbol("rating");
const tags = Symbol("tags");
//Функция для добавления метаданных в объект
function addMetadata(book, metadata, data) {
    if(book[metadata]){
        book[metadata].push() = data;
    }else{
        book[metadata] = [data];
    }
  
}

//Функция для извлечения метаданных из объекта
function getMetadata(book, metadata) {
  return book[metadata];
}

addMetadata(book, response, "Офигенная книга");
addMetadata(book, rating, 5);
addMetadata(book, tags, "distopia");

console.log(getMetadata(book, response));
console.log(getMetadata(book, rating));
console.log(getMetadata(book, tags));
