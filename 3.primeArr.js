const isValid = (num) => {
  if (num < 0) {
    console.log(`${num} is not postive`);
    return false;
  } else if (num % 1 || typeof num !== "number") {
    console.log(`${num} is nor an integer`);
    return false;
  }

  return true;
};

const isPrime = (num) => {
  let isNotPrime = false;

  if (num === 1) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (!isNotPrime) {
      isNotPrime = !!!(num % i);
    } else {
      break;
    }
  }

  return !isNotPrime;
};

const primeArr = (arr) => {
  return arr.filter((element) => (isValid(element) ? isPrime(element) : null));
};

console.log(primeArr([1, "or", 3, 4, 5, 6, 7, 8, 9, 10]));
