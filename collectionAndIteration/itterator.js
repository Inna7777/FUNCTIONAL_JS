// let obj = {
//   from: 1,
//   to: 17,
// };

// obj[Symbol.iterator] = function () {
//   // она возвращает объет иттератора
//   //Далее for( of) работает только с этим иттератором
//   return {
//     current: this.from,
//     last: this.to,
//     //next( )вызывается на каждой иттерациии
//     next() {
//       //он должен вернуть значение в виде объекта
//       return this.current <= this.last
//         ? { done: false, value: this.current++ }
//         : { done: true };
//     },
//   };
// };

// for (let number of obj) {
//   console.log(number);
// }
// Array.from

let pseudo = {
  0: "first",
  1: "second",
  length: 2,
};

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());
