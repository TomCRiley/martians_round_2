import { Robot } from './robot.js';

const robotOne = new Robot();

// const person = {
//   name: 'Tom',
//   age: 28,
//   sayHello() {
//     return `Hi my name is ${this.name} and I am ${this.age} years old`;
//   },
// };

const personTwo = {
  name: 'Pedro',
  age: 44,
  sayHello() {
    return `Hi my name is ${this.name} and I am ${this.age} years old`;
  },
};

class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi my name is ${this.name} and I am ${this.age} years old`;
  }
}

const tom = new Person({ name: 'Tom', age: 28 });
const pedro = new Person({ name: 'Pedro', age: 44 });
