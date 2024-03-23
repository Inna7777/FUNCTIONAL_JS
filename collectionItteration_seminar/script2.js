/*Задание 2 (тайминг 20 минут)
Используя Symbol.iterator, создайте объект "Библиотека", который можно
итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
2. Реализуйте кастомный итератор для объекта library. Итератор должен
перебирать книги по порядку.
3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
консоль*/

const library = [
  { title: "1900", autor: "Mark Tven" },
  { title: "Rommeo", autor: "Shecspire" },
  { title: "Demon", autor: "Lermontov" },
  { title: "Onegin", autor: "Pushkin" },
];

library[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: library[this.current++] }
        : { done: true };
    },
  };
};
for (let book of library) {
  console.log(`${book.title}, ${book.autor}`);
}
