const sum = (arr) => {
  let oddSum = 0,
    evenSum = 0;
  arr.forEach((element) =>
    typeof element === "number"
      ? element % 2 === 0
        ? (evenSum += element)
        : (oddSum += element)
      : console.log(`"${element}" is not a number so it wasn't added`)
  );

  return [evenSum, oddSum];
};

const sumArr = sum([2, 3, 4, 5, 6, 7, 8, "or"]);
console.log(sumArr);
