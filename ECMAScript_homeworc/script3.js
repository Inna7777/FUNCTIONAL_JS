/*""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"*/

function changeStyleDelayed(IDelement, delay) {
  setTimeout(function () {
    const title = document.getElementById(IDelement);
    title.style.color = "red";
  }, delay);
}

changeStyleDelayed("myElement", 2000);
