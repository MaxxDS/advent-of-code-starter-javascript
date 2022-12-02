export const parseInput = input => {
  const result = input.split('\n');
  return result;
};

export const partOne = input => {
  const data = parseInput(input);
  const result = data.map(game => {
    switch (game) {
      case 'A X':
        return 4;
      case 'A Y':
        return 8;
      case 'A Z':
        return 3;
      case 'B X':
        return 1;
      case 'B Y':
        return 5;
      case 'B Z':
        return 9;
      case 'C X':
        return 7;
      case 'C Y':
        return 2;
      case 'C Z':
        return 6;
      default:
        console.log('error');
    }
  });
  const sum = result.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

export const partTwo = input => {
  const data = parseInput(input);
  const result = data.map(game => {
    switch (game) {
      case 'A X':
        return 'A Z';
      case 'A Y':
        return 'A X';
      case 'A Z':
        return 'A Y';
      case 'B X':
        return 'B X';
      case 'B Y':
        return 'B Y';
      case 'B Z':
        return 'B Z';
      case 'C X':
        return 'C Y';
      case 'C Y':
        return 'C Z';
      case 'C Z':
        return 'C X';
      default:
        console.log('error');
    }
  });
  const result2 = result.map(game => {
    switch (game) {
      case 'A X':
        return 4;
      case 'A Y':
        return 8;
      case 'A Z':
        return 3;
      case 'B X':
        return 1;
      case 'B Y':
        return 5;
      case 'B Z':
        return 9;
      case 'C X':
        return 7;
      case 'C Y':
        return 2;
      case 'C Z':
        return 6;
      default:
        console.log('error');
    }
  });

  const sum = result2.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};
