const symbol = Symbol(); //Символ объявляется через функцию Symbol()

const dogID = Symbol("dog"); //При каждом создании символа, его значение уникально, даже если мы создадим несколько символов с одинаковым описанием

const dog1 = Symbol("dog");
const dog2 = Symbol("dog");
console.log(dog1);

console.log(dog1 === dog2); //false

console.log(dogID.description); //dog

const id = Symbol("dogID");

// let obj = {
//   [id]: "Gleb",
// };

// console.log(obj[id]); //Gleb

let buddies = {
  [Symbol("Juchka")]: "juchka",
  [Symbol("Murka")]: "Murka",
  [Symbol("Tarakashka")]: "Tarakashka",
  elepfant: "Cлон",
};
console.log(buddies);

let newBuddles = {};

Object.assign(newBuddles, buddies); // копирует элементы buddles в newBuddles

buddies.cat = "Kat";

console.log(newBuddles);

let id1 = Symbol.for("id"); // если символа не существует он будет создан
let id2 = Symbol.for("id"); // если символа не существует он будет создан
console.log(id1 === id2);

let sim1 = Symbol.for("name"); // если символа не существует он будет создан
let sim2 = Symbol.for("id");

console.log(Symbol.keyFor(sim1));
console.log(Symbol.keyFor(sim2));
