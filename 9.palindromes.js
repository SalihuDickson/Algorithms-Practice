const STACK = [];
let END = 0;

const push = (char) => {
  STACK[++END] = char;
};

const pop = () => {
  return STACK[END--];
};

const reverse = (string) => {
  let reversedString = "";

  for (let i = 0; i < string.length; i++) {
    push(string[i]);
  }

  for (let i = 0; i < string.length; i++) {
    reversedString += pop();
  }

  return reversedString;
};

const isPalindrome = (string) => {
  if (typeof string !== "string") return "error, please enter a string";
  return string.toLowerCase() === reverse(string).toLowerCase() ? "yes" : "no";
};

console.log(isPalindrome(9));
