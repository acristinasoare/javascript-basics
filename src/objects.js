const createPerson = (name, age) => {
  return {
    'name': name,
    'age': age
  }
}

const getName = object => {
  return object.name; 
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
 return person.age > 65 ? true : false; 
};

const getAges = people => {
 return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const agesArray = people.map(person => person.age);
  const agesTotal = agesArray.reduce((accumulator, age) => accumulator + age);
  return agesTotal / people.length;

  
};

const createTalkingPerson = (name, age) => { 
  return {
    'name' : name,
    'age' : age,
    'introduce' : otherName => {
      return `Hi ${otherName}, my name is ${name} and I am ${age}!`;
    }
    }
 
};

// use template literals `` to insert another variable in the string by using placeholders of the form ${expression} 

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
