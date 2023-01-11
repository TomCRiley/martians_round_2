export default {
  grid: [5, 3],
  robots: [
    { position: [1, 1], direction: 'E', instructions: 'RFRFRFRF' },
    { position: [3, 2], direction: 'N', instructions: 'FRRFLLFFRRFLL' },
    { position: [0, 3], direction: 'W', instructions: 'LLFFFLFLFL' },
  ],
};

// ## Goal Output
// 1 1 E
// 3 3 N LOST
// 2 3 S
