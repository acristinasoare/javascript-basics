function sayHello (string) {
  return 'Hello, ' + string + '!';
};

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
  return string.toLowerCase();
};

function countCharacters (string) {
  const str = string;
  return str.length; 
};

function firstCharacter (string) {
  const str = string;
  return str.charAt(0);
};

function firstCharacters (string, n) {
  const str = string;
  return str.substring(0,n);

};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
