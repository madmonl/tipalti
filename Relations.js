// For your convenience - tests and persons can
// be found below - under the implementation.
// Just uncomment and have fun.

const _  = require('lodash');
const Person =  require('./Person');
const Address =  require('./Address');
const Name = require('./Name');

class Relations {
  constructor(persons) {
    this.persons = persons;
  }

  isDirectRelation(personA, personB) {
    if (((personA.name.firstName === personB.name.firstName)
    && ((personA.name.lastName === personB.name.lastName))) || 
    ((personA.address.city === personB.address.city)
    && (personA.address.street === personB.address.street))) {
      return true;
    }

    return false;
  }

  isSamePerson(personA, personB) {
    if ((personA.name.firstName === personB.name.firstName)
    && ((personA.name.lastName === personB.name.lastName)) 
    && (personA.address.city === personB.address.city)
    && (personA.address.street === personB.address.street)) {
      return true;
    }

    return false;
  }

  findDistance(person, persons) {
    for (let i = 0; i < persons.length; i++) {
      if (this.isSamePerson(persons[i][0], person)) {
        return (persons[i][1] === Infinity) ? -1 : persons[i][1]; 
      }
    }
  }

  deletePerson(person, persons) {
    for (let i = 0; i < persons.length; i++) {
      if (this.isSamePerson(persons[i][0], person)) {
        persons.splice(i,1);
      }
    }
  }
  
  findMinRelationLevel(personA, personB) {
    let personsCopy = _.cloneDeep(this.persons);
    personsCopy = personsCopy.map((person) => [person, Infinity]);
    this.deletePerson(personA, personsCopy);
    const stack = [[personA, 0]];
    while (stack.length) {
      const [person, distance] = stack.pop();
      const newDistance = distance + 1;
      for (let i = 0; i < personsCopy.length; i++) {
        const directRelation = this.isDirectRelation(person, personsCopy[i][0]);
        const differentPersons = !(this.isSamePerson(person, personsCopy[i][0]));
        const smallerDistance = (personsCopy[i][1] > newDistance);
        if (directRelation && differentPersons && smallerDistance) {
          stack.push([personsCopy[i][0], newDistance]);
          personsCopy[i][1] = newDistance;
        }
      }
    }

    return this.findDistance(personB, personsCopy);
  }
}

// const alanAName = new Name('Alan', 'Turing'); 
// const alanAAddress = new Address('Blechley', 'Park'); 
// const alanA = new Person(alanAName, alanAAddress);

// const alanBName = new Name('Alan', 'Turing'); 
// const alanBAddress = new Address('cambridge', 'uni'); 
// const alanB = new Person(alanBName, alanBAddress);

// const joanAName = new Name('Joan', 'Clarke'); 
// const joanAAddress = new Address('Blechley', 'Park');
// const joanA = new Person(joanAName, joanAAddress);


// const joanBName = new Name('Joan', 'Clarke'); 
// const joanBAddress = new Address('London', 'State');
// const joanB = new Person(joanBName, joanBAddress);

// const graceName = new Name('grace', 'hopper'); 
// const graceAddress = new Address('new', 'york');
// const grace = new Person(graceName, graceAddress);

// const rel = new Relations([alanA, alanB, joanA, joanB, grace]);
// console.log(rel.findMinRelationLevel(alanB, grace));
