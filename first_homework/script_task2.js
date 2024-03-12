"use strict";

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(number) {
  let counter = number;
  return {
    increment() {
      ++counter;
    },
    decrement() {
      --counter;
    },
    getcounter() {
      return counter;
    },
  };
}

const newnumber = createCounter(9);
newnumber.increment();
console.log(newnumber.getcounter());
newnumber.decrement();
console.log(newnumber.getcounter());
