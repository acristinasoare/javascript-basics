const getNthElement = (index, array) => {
  return array [index >= array.length ? index % array.length : index]
}

const arrayToCSVString = array => {
  return array.join();
  
  //creates a new string from an array by concatanating all the elements of the array; by default it 
  //uses a comma as a separator, but you can specify what separators you want to be added between the items. eg join() - comma but no space, 
  //join(, ), join (-), join ('') no space, no comma , join (' ') space but no comma 
};

const csvStringToArray = string => {
  return string.split(',')  
  
  // string.split(seperator) --> if no seperator specified, will return the string as one element inside an array
  //if separator specified, for example space ' ' or comma ','  this is where split method will divide the string
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element); 
};

//allows you to merge two or more arrays into a new array which will be returned, 
  //can also be used as a push method, so add one element to the end of the array without modifying the original array/

// alternartive solution 
// newArray = array.slice()   
// newArray.push(element)
// return newArray

// -slice returns a shallow copy of a portion of an array - 
//which means it does not modify the original array; if no arguments given to function,
// by default the starting index will be 0, and the ending index is array.length

const removeNthElement = (index, array) => {
  array.splice(index, 1)
  return array;
};

// .splice () changes an array by removing or replacing existing elements 
// parameters - (start, deleteCount, item1,...,item n)
// start - index at which to start changing the array
// deleteCount - integer indicating the number of elements to remove from start
// the elements to add to the array beginning from start

const numbersToStrings = numbers => {
 return numbers.map(number =>number.toString())
};

// map creates a new array populated with the results of calling a function to every element
//in the calling array

const uppercaseWordsInArray = strings => {
 return strings.map(string => string.toUpperCase())
}

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''))
  
};

//map takes every element in the strings array and applies the split,reverse and join functions on each element
//split creates an array with every letter as an element of an array ie ['c', 'a', 't']
//reverse reverses the order of the letters in the array ['t', 'a', 'c']
//join converts the array back into a string 'tac' 

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0)
};

// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const removeNthElement2 = (index, array) => {
  const arrayCopy = array.slice();
  arrayCopy.splice(index,1);
  return arrayCopy;
};

 //returns an array with the nth element removed, and does not mutate the original 
 //.slice() makes a copy of the original array
 //. .splice(index,1) removes 1 element at the specified index x

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => string.toLowerCase().startsWith('a') || string.toLowerCase().startsWith('e') || string.toLowerCase().startsWith('i') || string.toLowerCase().startsWith('o') || string.toLowerCase().startsWith('u'))
  
};

const removeSpaces = string => {
  return string.split(' ').join('');
 
};

//split(' ') creates an array with the string words as elements; inverted commas and space (' ') instruct split() to separate string into elements 
//where there is a space in the string
//join ('') joins the elements of the array into a string, inverted commas with no space instructs join() to merge elements with no space between, 

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, number) => accumulator + number)

};

// .reduce method executes a callback fn on every element of the array and returns one value 

const sortByLastLetter = strings => {
  function compareFunction(a, b) {
    return a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1)
  }
  return strings.sort(compareFunction)
};

//sort() sorts the elements of an array 
//syntax sort() sort(compareFn)
//if no compareFn supplied will convert array elements into strings and compare strings in UTF-16 code units order
//compareFn(a,b) return value > 0, sort a after b
//compareFn(a,b) return value < 0, sort a before b
//compareFn(a.b) return value ===0, keep original order of a b


module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
