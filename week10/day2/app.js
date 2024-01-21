//  Exercise 1 : Location

// 1  
// "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

// Exercise 2: Display Student Info

function fullname({firstName, lastName}) {
    return `Your full name is ${firstName} ${lastName}`;
  }
  
  const person = {
    firstName: "Elie",
    lastName: "Schoppik"
  }
  
  console.log(fullname(person));



// Exercise 3: User & Id



const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArr = [];

for (const property in users) {
  usersArr.push([property, users[property] * 2]);
}

console.log(usersArr);


// Exercise 5 : Dog Class

// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


// Exercise 6 : Challenges

// [[1]] === [[1]] is false  bc arrays are reference types n JavaScript
// {} === {} is false  bc objects are also reference types


// 2 

// object1, object2, and object3 refer to the same object in memory,all three variables point to the same object in memory, which has a number property with a value of 5.

// its would be like  4, 4,5

// 1 

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }

// 2
  class Mamal extends Animal {
    sound(animalSound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${animalSound}`;
    }
  }
  // 3
  const farmerCow = new Mamal("Lily", "cow", "brown and white");

  console.log(farmerCow.sound("Moooo!"));
