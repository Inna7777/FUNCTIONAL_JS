/*""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *
// Пример использования функции


saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.log(error.message);
});

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени*/
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

function saveUserData(user) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user), // Тело запроса в JSON-формате
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        console.log("Ошибка");
        console.log(response);
      }
    })
    .then((data) => {
      console.log("Данные успешно сохранены:", data);
    })
    .catch((error) => {
      console.error("Ошибка данные не сохранены", error);
    });
}

saveUserData(user);
