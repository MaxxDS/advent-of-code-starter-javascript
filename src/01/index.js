import { max } from 'lodash';

export const parseInput = input => {
  const result = input
    .split('\n\n')
    .map(elf => elf.split('\n').map(cal => Number(cal)));
  return result;
};

export const partOne = input => {
  const data = parseInput(input);
  const result = data.map(elf => {
    const sum = elf.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  });
  return max(result);
};

export const partTwo = input => {
  const data = parseInput(input);
  const result = data.map(elf => {
    const sum = elf.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  });
  const sortedElves = result.sort(function (a, b) {
    return b - a;
  });
  return sortedElves[0] + sortedElves[1] + sortedElves[2];
};
