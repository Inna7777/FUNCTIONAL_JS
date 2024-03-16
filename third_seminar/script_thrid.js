"use strict";
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// const Box = {
//   name: "box",
//   width: 30,
//   heate: 30,
//   material: "papere",
//   open() {
//     console.log(" Iam open");
//   },
//   clouse() {
//     console.log(" I am clouse");
//   },
// };

// const SmoleBox = {
//   name: "smole",
//   width: 15,
//   heate: 5,
// };
// //
// // Object.setPrototypeOf(SmoleBox, Box);

// function getPrototypeChain(obj) {
//   const prototypeChain = [];
//   let currentObj = obj;
//   while (currentObj !== null) {
//     prototypeChain.push(currentObj);
//     currentObj = Object.getPrototypeOf(currentObj);
//   }
//   return prototypeChain;
// }

// const prototypeChain = getPrototypeChain(SmoleBox);
// console.log(prototypeChain);
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak(zvuk) {
//     console.log(zvuk);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   fetch() {
//     console.log(`Собака ${this.name} ${this.breed} принесла мяч`);
//   }
// }

// const Dog1 = new Dog("Герасим", "Английский бульдог");

// console.log(Dog1.name);
// Dog1.speak("МЯУ");
// Dog1.fetch();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(customerName, initialTotalCost = 0) {
    this.customerName = customerName;
    this.initialTotalCost = initialTotalCost;
    this.shoppingCart = [];
  }

  addItem(product, quantity) {
    let currentProduct = product;
    if (quantity === undefined && currentProduct !== null) {
      this.shoppingCart.push(currentProduct);
      this.initialTotalCost += product.price;
    } else {
      for (let i = 1; i <= quantity; i++) {
        this.shoppingCart.push(currentProduct);
        this.initialTotalCost += product.price;
      }
    }
    return this.shoppingCart;
  }

  //   getCurrentTotalCost() {
  //     let cost = 0;
  //     this.shoppingCart.forEach(function (product) {
  //       cost += product.price;
  //     });
  //     return (this.initialTotalCost = cost);
  //   }

  getCurrentTotalCost() {
    return this.initialTotalCost;
  }
  checout() {
    console.log(
      `Заказ оформден для покупателя ${
        this.customerName
      }.\n Общая стоимость заказа: ${this.getCurrentTotalCost()}\n Спасибо за покупку`
    );
  }
}

const milk = new Product("Молоко", 79);
const kefir = new Product("Кефир", 67);
const bred = new Product("Хлеб", 45);
console.log(milk);

const person1 = new ShoppingCart("Петя");
console.log(person1);

person1.addItem(milk);
person1.addItem(kefir, 2);
person1.addItem(bred);
const person2 = new ShoppingCart("Вова");
console.log(person2);
person2.addItem(milk);
person2.addItem(milk, 2);
// console.log(person1.getCurrentTotalCost());
person1.checout();
