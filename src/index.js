import { Robot } from './robot.js';
import instructions from './instructions.js';

let grid = [];
console.log(instructions);
function init() {
  let gridSize = instructions.grid;
  let gridInit = Array.from(Array(gridSize[0]), () => new Array(gridSize[1]));
  // should output grid size based on grid being 5 by 5. Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]
  // https://www.w3docs.com/snippets/javascript/how-to-create-a-two-dimensional-array-in-javascript.html
  console.log(grid);
  commands.robots.forEach((r) => {
    //create a new robot at each location from the commands that are parsed by the commands variable
    const robot = new Robot({
      initialPosition: { x: r.position[0], y: r.position[1] },
      //first array item, second array item (so 3 and 1 for first robot)
      instructions: r.instructions.split(''),
    });
    const initialLocation = grid[x];
    initialLocation[y] = robot;
  });
}

function moveRobots() {
  //func
}

// const person = {
//   name: 'Tom',
//   age: 28,
//   sayHello() {
//     return `Hi my name is ${this.name} and I am ${this.age} years old`;
//   },
// };

// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     return `Hi my name is ${this.name} and I am ${this.age} years old`;
//   }
// }

// const tom = new Person({ name: 'Tom', age: 28 });
// const pedro = new Person({ name: 'Pedro', age: 44 });
