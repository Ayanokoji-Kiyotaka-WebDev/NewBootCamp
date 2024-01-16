// Exercise 1: Find the Sum

const sum = (num1, num2) => num1 + num2;

console.log(sum(5, 3))

// Exercise 2: Kg and Grams

function kgToGrams(kg) {
    return kg * 1000;
  }
  console.log(kgToGrams(5))

  const grams = function(kg) {
    return kg * 1000;
  };
  console.log(grams(2));

  const toGrams = (kg) => kg * 1000;
console.log(toGrams(3))

// Exercise 3: Fortune Teller

(function(children, partner, location, job) {
    const fortune = document.createElement('div');
    fortune.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.appendChild(fortune);
  })(2, "Anna", "NewYork", "developer");
  // Exercise 4: Welcome
  (function(userName) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = `Welcome, ${userName}!`;
    document.getElementById('navbar').appendChild(welcomeDiv);
})("fred");

// Exercise 5: Juice Bar
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
    }
  
    addIngredients("apple", "banana", "strawberry");
  }
  
  makeJuice("medium");
  //Part II
  function makeJuice(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      console.log(`The client wants a ${size} juice, containing ${ingredients.join(", ")}`);
    }
  
    addIngredients("apple", "banana", "strawberry");
    addIngredients("mango", "pineapple", "orange");
    displayJuice();
  }
  
  makeJuice("large");