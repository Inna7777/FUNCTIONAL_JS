// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// const mergeArray = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArray([1, 2, 3], [4, 5, 6]));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...arguments) {
//   return arguments.filter((val, index) => arguments.indexOf(val) === index);
// }

// console.log(removeDuplicates(1, 2, 4, 2, 4, 1, 5));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа

// function getEvenNumbers(arr) {
//   return arr.filter((val) => val % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 4, 5, 6]));

//более современный вариант
// const getEvenNumbers = (arr) => arr.filter((val) => val % 2 === 0);
// console.log(getEvenNumbers([12, 32, 41, 56, 63]));

// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// function calculateAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// const calculateAverage = (arr) => {
//   let sum = arr.reduce((num, index) => num + index, 0);
//   return sum / arr.length;
// };

// console.log(calculateAverage([1, 2, 3]));
// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// let str = "lorem index arr";

// function capitalizeFirstLetter(str) {
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let arr2 = arr[i].split("");
//     console.log(arr2);
//     arr2[0] = arr2[0].toUpperCase();
//     console.log(arr2);
//     arr2 = arr2.join("");
//     console.log(arr2);
//     arr[i] = arr2;
//   }
//   return arr.join(" ");
// }

// const capitalizeFirstLetter = (str) => {
//   return str
//     .split(" ")
//     .map((world) => world.charAt(0).toUpperCase() + world.slice(1))
//     .join(" ");
// };

// console.log(capitalizeFirstLetter(str));

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(params) {
//   let value = params;
//   return {
//     add (num) {
//       value += num;
//     },
//     subtract(num) {
//       value -= num;
//     },
//     getvalue() {
//       return value;
//     },
//   };
// }

// const calculator = createCalculator(10);
// calculator.add(5);
// calculator.subtract(3);
// console.log(calculator.getvalue());

// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John

// function createGreeting(username) {
//   function hello() {
//     console.log(`Hello, ${username}`);
//   }
//   return hello;
// }

// const greeting = createGreeting("John");
// greeting(); // Ожидаемый результат: "Hello, John

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(length) {
//   return function (password) {
//     return password.length === length;
//   };
// }

// const isPasswordValid = createPasswordChecker(10);
// console.log(isPasswordValid("helloworld")); // Ожидаемый результат:

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

// function sumDigits(number) {
//   if (number === 0) {
//     return 0;
//   }
//   return (number % 10) + sumDigits(Math.floor(number / 10));
// }

// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(4560799)); // Ожидаемый результат: 39 (4 + 5 + 6
// // + 7 + 8 + 9)
// let i = 0;
// function Num(n) {
//   if (i >= n + i) {
//     return n;
//   }

//   console.log(n - (n - ++i));

//   return Num(n - 1);
// }

// Num(8);

function AofB(a, b) {
  if (a <= b) {
    if (a === b) {
      return b;
    }
    console.log(a);
    return AofB(a + 1, b);
  } else {
    if (a === b) {
      return b;
    }
    console.log(a);

    return AofB(a - 1, b);
  }
}

AofB(8, 2);
