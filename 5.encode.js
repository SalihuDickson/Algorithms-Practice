const encode = (str) => {
  let encodedString = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === " " ? (encodedString += "%20") : (encodedString += str[i]);
  }

  return encodedString;
};

console.log(encode("my name is john"));
