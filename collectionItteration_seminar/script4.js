/* Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
1. Map будет использоваться для хранения соответствия между уроком и
преподавателем.
2. Set будет использоваться для хранения уникальных уроков, которые
посетил каждый студент.*/

let lesson = new Map();
let lessonStudent = new Map();

lesson
  .set("Математика", "Смирнов")
  .set("История", "Иванов")
  .set("История", "Иванов")
  .set("Физика", "Иванов");

function setCollections(namecollection, key, value) {
  namecollection.set(key, value);
  return namecollection;
}

setCollections(lesson, "Математика", "Сидоров");
setCollections(lesson, "Математика", "Сидоров");
setCollections(lessonStudent, "История", "Овечкин");
setCollections(lessonStudent, "Физика", "Петров");
setCollections(lessonStudent, "Физика твердых тел", "Петров");
setCollections(lessonStudent, "Физика твердых тел", "Гулькин");

console.log(lesson);
// console.log(lessonStudent);

console.log(`Уроки математики : ${lesson.get("Математика")}`);
let les = [];
for (let [key, value] of lesson) {
  if (value === "Иванов") {
    les.push(key);
  }
}
console.log(`Уроки Иванова: ${les}`);
lesson.forEach((value, key, map) => {
  console.log(`${key} , ${value}`);
});

const ivanLesson = new Set();
ivanLesson.add("Histori").add("Mathematic");
const student = new Map();
student.set("Ivan", ivanLesson);
console.log(`Уроки Иван: ${[...student.get("Ivan")]} `);
