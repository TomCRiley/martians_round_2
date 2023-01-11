// import { instructions } from './moveRobot';

export class Robot {
  constructor({ initialPosition: { x, y }, instructions }) {
    this.previousPosition = { x, y };
    this.currentPosition = { x, y };
    this.instructions = instructions;
  }

  move() {
    this.instructions.forEach((command) => {
      switch (command) {
        case 'l':
          console.log('move to left');
          break;
        case 'r':
          console.log('move to right');
          break;
        case 'f':
          console.log('move to forward');
          break;
      }
    });
  }
}

const robot = new Robot({
  initialPosition: { x: 1, y: 1 },
  instructions: ['l', 'l', 'f', 'f'],
});

robot.move();
