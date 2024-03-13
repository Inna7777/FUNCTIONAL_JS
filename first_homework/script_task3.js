"use strict";
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {
  if (rootElement.classList && rootElement.classList.contains(className)) {
    //содержит ли элемент определенный класс
    return rootElement;
  }

  for (let i = 0; i < rootElement.children.length; i++) {
    const foundElement = findElementByClass(rootElement.children[i], className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
