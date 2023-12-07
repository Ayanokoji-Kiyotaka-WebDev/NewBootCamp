// loof - Exercise 1 : List Of People
 (1)
const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1)

// (2)
people[2] = 'jason'
console.log(people)

// (3)
people.push ('Yourname')

console.log(people)

// (4)

const indexOfMary = people.indexOf('Mary')

console.log(indexOfMary)

// (5)


let copypeople = people.slice(0,people.indexOf('mary')).conecat(people.slice(indexOfMary + 1))

console.log( copypeople)




// (6) If the element does not exist in the array, the  indexOf  method returns -1.


// Part II - Loops 1/2
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] === "Devon") {
      break;
    }
  }

  // Exercise 2 : Your Favorite Colors
  // (1)
  let  colors = ['yellow',  'red', 'bule', 'green']
 // (2)
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1} choice is ${colors[i]}`);
 }
 
 // (3)
 const BonusSuffixes = ["ow", "ed", "le", "en"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${BonusSuffixes[i]} choice is ${colors[i]}`);
}
 // Exercise 3 : Repeat The Question

//(1)let 
let number = prompat  ( ' enter ur number')
console.log(typeof number);

// (2) 
while (number <10) {
    number = prompat (' enter a new number pls  ')
}

//  Exercise 4 : Building Management

// (1, 2)
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)

 // 3

 onsole.log(building.numberOfFloors.firstFloor + building.numberOfAptByFloor.thirdFloor)

 // (4)
 console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
// (5)
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
  // Exercise 5 : Family

  const family = {
    name: "The Smiths",
    friends: ["John", "Mary"],
    pets: ["dog", "cat"],
    country: "isreal"
  };

  const keys = Object.keys(family);
for (let key in family) {
    console.log(key + ": " + family[key]);
  }
 

  // Exercise 6 : Rudolf

  const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  for ( let key in details) {
    console.log(`${key}: ${details[key]}`);
}

// Exercise 7 : Secret Group
