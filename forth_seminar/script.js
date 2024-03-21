"use strict";

// function delayedMessage(message, delay) {
//   setTimeout(function () {
//     console.log(message);
//   }, delay);
// }

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);

// console.log("Конец программы");

// const tasks = [
//   { name: "task 1", time: 1000 },
//   { name: "task 2", time: 2000 },
//   { name: "task 3", time: 3000 },
//   { name: "task 4", time: 4000 },
//   { name: "task 5", time: 5000 },
// ];
// let delay = 0;
// tasks.forEach((el) => {
//   let message = el.name;
//   delay += el.time;
//   delayedMessage(message, delay);
// });

// function delayedMessage(message, delay) {
//   setTimeout(function () {
//     console.log(message);
//   }, delay);
// }

// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().

// function loadData(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//       console.log(`${xhr.responseText}`);
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }
// loadData(" https://api.github.com/users/octocat");

// Напишите функцию getData, которая делает асинхронный запрос к
// API и возвращает данные в виде объекта.
// Внутри функции происходит асинхронный запрос к API с помощью
// функции fetch. Затем, с использованием оператора await, ожидается
// ответ от сервера и его парсинг в формате JSON с помощью метода
// response.json(). Полученные данные возвращаются из функции.
// (async () => {
//   let url = "https://api.github.com/users/octocat";

//   let response = await fetch(url);

//   async function getData() {
//     let json = await response.json();
//     console.log(json);
//   }

//   getData();
// })();

const getUser = async (url) => {
  // Делаем запрос, и ждем его результат (указание await),     который будет сохранен в константу response.
  const response = await fetch(url);
  // Выполняем еще один асинхронный метод, преобразования в
  // текст, также ждем результат, который сохраняется в константу
  // пользователь.
  const user = await response.json();
  console.log(user);
  let arrUserName = [];

  user.forEach((element) => {
    arrUserName.push(element.username);
  });

  arrUserName.sort();
  const userList = document.getElementById("result");
  userList.innerHTML = "";

  arrUserName.forEach((username) => {
    const li = document.createElement("li");
    li.textContent = username;
    userList.appendChild(li);
  });
};

function callGetUser() {
  getUser("https://jsonplaceholder.typicode.com/users");
}
