// import { instructions } from './moveRobot';

export class Robot {
  constructor(initialPosition, instructions) {
    console.log(initialPosition);
    this.previousPosition = { x: initialPosition.x, y: initialPosition.y };
    this.currentPosition = { x: initialPosition.x, y: initialPosition.y };
    this.instructions = instructions;
  }

  move() {
    this.instructions.forEach((command) => {
      switch (command) {
        case 'F':
          console.log('move to forward');
          break;
        case 'L':
          console.log('move to left');
          break;
        case 'R':
          console.log('move to right');
          break;
      }
    });
  }
}

// const robot = new Robot({
//   initialPosition: { x: 1, y: 1 },
//   instructions: ['l', 'l', 'f', 'f'],
// });

// robot.move();
