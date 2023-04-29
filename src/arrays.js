const getNthElement = (index, array) => {
  return array [index >= array.length ? index % array.length : index]
}

const arrayToCSVString = array => {
  return array.join();
  
  //creates a new string from an array by concatanating all the elements of the array; by default it 
  //uses a comma as a separator, but you can specify what separators you want to be added between the items. eg join() - comma but no space, 
  //join(, ), join (-)
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
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

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
