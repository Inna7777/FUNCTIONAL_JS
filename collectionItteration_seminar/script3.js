/*Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
фильтрует только те из них, у которых есть атрибут data-active.
*/

function getArrayElement(atribut) {
  const elements = document.querySelectorAll("div");
  const arrayElement = Array.from(elements);
  console.log(arrayElement);
  const newarray = [];
  arrayElement.forEach((element) => {
    if (element.getAttribute(atribut) === "true") {
      newarray.push(element);
    }
  });
  newarray.forEach((el) => {
    console.log(el);
  });
}
console.log(getArrayElement("data-active"));

function getElementHTML(atrribut) {
  const arrElement = document.querySelectorAll(`[${atrribut}]`);
  const newarrElement = Array.from(arrElement);
  const result = newarrElement.filter((element) =>
    element.hasAttribute(atrribut)
  );
  result.forEach((el) => {
    console.log(el);
  });
}

console.log(getElementHTML("data-active"));
