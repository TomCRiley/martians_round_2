export class Robot {
  constructor({ initialPosition: { x, y } }) {
    this.data.previousPosition = { x, y };
    this.data.currentPosition = { x, y };
  }
}
