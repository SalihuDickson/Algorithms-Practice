isValid = (num) => {
  if (num < 0) {
    console.log("Enter a postive number please");
    return false;
  } else if (num % 1 || typeof num !== "number") {
    console.log("Please enter an integer");
    return false;
  }

  return true;
};

isPrime = (num) => {
  let isNotPrime = false;

  if (!isValid(num)) return " ";
  else if (num === 1) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (!isNotPrime) {
      isNotPrime = !!!(num % i);
    } else {
      break;
    }
  }

  return !isNotPrime;
};

console.log(isPrime(2));
