"use strict";
// Класс робот пылесос

class VacuumCliner {
  model = "vacuum cliner";
  counterOfStarting = 0;
  isFull = false;

  constructor() {}

  startClining() {
    this.counterOfStarting++;
    console.log("I am thr metod clining of VacuumCliner");
    console.log(`I am clining  ${this.counterOfStarting} `);
  }

  goChange() {
    console.log("I am the metod goChange of VacuumCliner");
  }
}

const BaseRobo = new VacuumCliner();
console.log(BaseRobo.constructor);
console.log(BaseRobo.model);
console.log(BaseRobo.startClining());
console.log(BaseRobo.goChange());

class DansingService extends VacuumCliner {
  model = "dansing";
  power = 200;
  batterSize = 2100;
  isUVLampOf = false;

  switchUVLamp() {
    console.log("I am metod Dansing");
    this.isUVLampOf = !this.isUVLampOf;
    console.log(`lamp is ${this.isUVLampOf}`);
  }
}
const DansingRobo = new DansingService();
// наследует кдасс
console.log(DansingRobo.__proto__);
// сщбственный метод
console.log(DansingRobo.switchUVLamp());
// собственная модель
console.log(DansingRobo.model);
// метод наследуемого класса
console.log(DansingRobo.startClining());
