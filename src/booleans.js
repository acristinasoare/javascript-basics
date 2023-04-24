function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;

};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a,b) {
  return (a || b) && !(a && b);
}

function truthiness(a) {
  if (a) {
    return true;
  } else {
    return false;
  }
};

function isEqual(a, b) {
  if (a===b){
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a>b){
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a<=b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a%2 !== 0) {
    return true;
  } else {
    return false;
  }
};

function isEven(a) {
  if (a%2 === 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))){
    return true;
  } else {
    return false;
  }
};

function startsWith(char, string) {
  const a = char.length;
  const b = string.substring(0,a);
  if (char===b) {
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
  const n = string.search(/[aeiou]/i);
  if (n >= 0) {
    return true;
  } else {
    return false;
  }
};

function isLowerCase(string) {
  const strToLowerCase = string.toLowerCase();
  if (strToLowerCase === string) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
