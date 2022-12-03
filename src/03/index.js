export const parseInput = input => {
  const result = input.split('\n');
  return result;
};

const alphabetPosition = text => {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var code = text.charCodeAt(i);
    if (code > 64 && code < 91) result += code - 38 + ' ';
    if (code > 96 && code < 123) result += code - 96 + ' ';
  }
  return result.slice(0, result.length - 1);
};

const intersection = (arr1, arr2) => {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      continue;
    }
    res.push(arr1[i]);
  }
  return res;
};

const intersectMany = (...arrs) => {
  let res = arrs[0].slice();
  for (let i = 1; i < arrs.length; i++) {
    res = intersection(res, arrs[i]);
  }
  return res;
};

export const partOne = input => {
  const data = parseInput(input);

  const result = data.map(rucksack => {
    const list = rucksack.split('');
    const middleIndex = Math.ceil(list.length / 2);
    const firstHalf = list.splice(0, middleIndex);
    const secondHalf = list.splice(-middleIndex);
    const intersection = firstHalf.filter(element =>
      secondHalf.includes(element),
    );
    return Number(alphabetPosition(intersection[0]));
  });

  const sum = result.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

export const partTwo = input => {
  const data = parseInput(input);
  const result = data.map((rucksack, index) => {
    if ((index + 1) % 3 === 0) {
      return [
        data[index - 2].split(''),
        data[index - 1].split(''),
        data[index].split(''),
      ];
    }
  });
  const groups = result.filter(groupOf3 => {
    return groupOf3 !== undefined;
  });

  const itemTypes = groups.map(groupOf3 => {
    return intersectMany(groupOf3[0], groupOf3[1], groupOf3[2])[0];
  });

  const priorities = itemTypes.map(itemType =>
    Number(alphabetPosition(itemType)),
  );
  const sum = priorities.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};
