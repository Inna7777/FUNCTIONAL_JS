/*Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.*/

const dishCook = new Map();

dishCook.set("pizza", "Виктор").set("sushi", "Ольга").set("dessert", "Дмитрий");

// console.log(dishCook);
// console.log(dishCook.values());
// console.log(dishCook.get("pizza"));

const orders = new Map();
const orderAleks = {
  pizza: { Пеперони: 1 },
  dessert: { Тирамису: 2 },
};
const orderMaria = {
  pizza: { Маргарита: 1 },
  sushi: { Калифорния: 3 },
};

orders.set("Алексей", orderAleks);
orders.set("Мария", orderMaria);

// console.log(orders.keys());
// console.log(orders.values());
// console.log(orders.get("Алексей"));

function chekOrder(name) {
  console.log(`Заказ клиента: ${name}`);
  let order = orders.get(name);
  for (let key in order) {
    let chef = dishCook.get(key);
    let countdish = order[key];
    for (let nameproduct in countdish) {
      let dish = nameproduct;
      let count = countdish[nameproduct];

      console.log(
        `${key}:${dish}, Количество- ${count}, Готовит повар: ${chef}`
      );
    }
  }
}

chekOrder("Алексей");
console.log("------------------------------");
chekOrder("Мария");
