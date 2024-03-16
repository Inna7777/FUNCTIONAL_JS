"use strict";
// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(number) {
    this.number = number;
    this.order = [];
  }

  addProduct(product) {
    this.order.push(product);
    return this.order;
  }

  getTotalPrice() {
    let cost = 0;
    this.order.forEach((product) => {
      cost += product.price;
    });
    return cost;
  }
}
const order = new Order(12345);
const order2 = new Order(54329);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

order2.addProduct(product2);
order2.addProduct(product2);

console.log(
  `Общая стоимость заказа №${order.number}: ` + order.getTotalPrice()
);
console.log(
  `Общая стоимость заказа №${order2.number}: ` + order2.getTotalPrice()
);
