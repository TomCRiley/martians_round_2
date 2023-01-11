import { Robot } from './robot.js';
import instructions from './instructions.js';

let grid = [];
// console.log(instructions);
function init() {
  let gridSize = instructions.grid;
  grid = Array.from(Array(gridSize.coord1), () => new Array(gridSize.coord2));

  // should output grid size based on grid being 5 by 5. Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]
  // https://www.w3docs.com/snippets/javascript/how-to-create-a-two-dimensional-array-in-javascript.html
  // console.log(gridInit);
  // console.log(instructions);
  instructions.robots.forEach((r) => {
    //create a new robot at each location from the commands that are parsed by the commands variable
    const robot = new Robot(
      { x: r.position.x, y: r.position.y },
      //first array item, second array item (so 3 and 1 for first robot)
      r.instructions.split('')
    );
    console.log(robot);
    const initialLocation = grid[robot.currentPosition.x];
    initialLocation[robot.currentPosition.y] = robot;
    //25/26 func for creating grid position
  });
}

function move() {
  //func
  //grid array
}

init();

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
