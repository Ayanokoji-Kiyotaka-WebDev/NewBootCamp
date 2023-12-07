// Daily Challenge: JS Arrays & Methods

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1)
console.log(fruits);

// (1)
let NewfruitsOrder =fruits.sort((a, b) => a.localeCompare(b));
console.log(NewfruitsOrder);

// (2)
 let addNewFruite = fruits.push('Kiwi')
 console.log(addNewFruite);

// (3)

let removeApple = fruits.shift(0)
console.log(removeApple);


// (4)
let reve = fruits.reverse()
console.log(reve);


//Exercise 2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let accesO = moreFruits[1][1];
console.log(accesO);


//Exercise 3:






