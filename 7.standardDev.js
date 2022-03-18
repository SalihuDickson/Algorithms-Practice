const makeValid = (arr) => {
  return arr.filter((element) => {
    if (typeof element === "number" && element >= 0 && !!!(element % 1)) {
      return element;
    } else
      console.log(`"${element}" is not a valid number so it will be discarded`);
  });
};

const standardDev = (arr) => {
  let validArr = makeValid(arr);

  const mean = validArr.reduce((acc, curr) => acc + curr) / validArr.length;

  validArr = validArr.map((element) => (element - mean) ** 2);

  const sum = validArr.reduce((acc, curr) => acc + curr);

  return Math.sqrt(sum / validArr.length);
};

console.log(standardDev([10, 12, 23, 23, 16, 23, 21, 16, "re", 7 / 2, -1]));
