"use strict";
// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// / Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17,"" 1th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"
// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();

class Student {
  constructor(info) {
    this.info = info;
  }
  displayInfo() {
    const str = this.info;
    const arr = str.split('"').filter((word) => word !== "");
    //console.log(arr);
    arr[1] = arr[1]
      .split("")
      .filter((simvol) => simvol !== " " && simvol !== ",")
      .join("");
    // console.log(arr[1]);
    console.log(`Name: ${arr[0]}\n Age:${arr[1]}\n Grade:${arr[2]}`);
  }
}

const student1 = new Student('"John Smith"", 16, ""10th grade"');
student1.displayInfo();
const student2 = new Student('"Jane Doe"", 17, ""11th grade"');
student2.displayInfo();
