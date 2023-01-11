export default {
  grid: { coord1: 5, coord2: 3 },
  robots: [
    { position: { x: 1, y: 1 }, direction: 'E', instructions: 'RFRFRFRF' },
    { position: { x: 3, y: 2 }, direction: 'N', instructions: 'FRRFLLFFRRFLL' },
    { position: { x: 0, y: 3 }, direction: 'W', instructions: 'LLFFFLFLFL' },
  ],
};

// ## Goal Output
// 1 1 E
// 3 3 N LOST
// 2 3 S
