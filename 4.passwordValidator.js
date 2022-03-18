const checkNumber = (char) => {
  return !isNaN(char);
};

const checkSpecialChar = (string) => {
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return specialChar.test(string);
};

const checkPassword = (password) => {
  let str;
  typeof password !== "string" ? (str = toString(password)) : (str = password);

  let hasNumbers = false,
    hasSpecialChar = false,
    onlyNumbers;

  if (checkSpecialChar(str)) hasSpecialChar = true;

  for (let i = 0; i < str.length; i++) {
    if (!checkNumber(str.charAt(i)) && !hasSpecialChar) onlyNumbers = false;
    else if (checkNumber(str.charAt(i))) {
      typeof onlyNumbers === "undefined"
        ? (onlyNumbers = true)
        : (hasNumbers = true);
    }

    if (hasNumbers && hasSpecialChar) return 3;
  }

  return onlyNumbers ? 1 : hasNumbers && !hasSpecialChar ? 2 : 0;
};

console.log(checkPassword("wrfwe%wq@!@#@e32233322"));
