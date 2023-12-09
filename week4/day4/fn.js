// 🌟 Exercise 1 : Information

// Part I : function with no parameters

// (1)
function infoAboutMe() {
    console.log('hi my name is ayano im 20 a year old');
}

infoAboutMe()

// Part II : function with three parameters

function infoAboutPerson ( ipersonName, personAge, personFavoriteColor) {
    console.log('my name is  '  + ipersonName + ' a  ' + personAge +  ' year old  ' + 'my favorite color is  ' + personFavoriteColor );
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
// (1)

function calculateTip() {
   let bill =  Number ( prompt  (' hi john wt aboutthe amount of the bill. ')) 
 tip = ''
   if ( bill < 50){
    tip = bill *0.2
   } else if  (bill >= 50 && bill <= 200) {
    tip = bill * 0.15;
   } else{
    tip =  bill * 0.1;
   }
   console.log(`The tip should be ${tip.toFixed(2)} dollars.`);
}
calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23

// (1)

function isDivisible () {
    let Numbers = 0;
    for  ( let i =0; i <= 500; i++){
       if (i%23 === 0) {
        console.log(i);
      Numbers += i;
       }
    }
    console.log(`The sum of all numbers divisible by 23 is ${Numbers}.`);
}
isDivisible ()


// Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// (2)
 let shoppingList = ['banana', 'orange',  'apple']

 let price = {
    banana: 1.3,
    orange: 1.4,
    apple: 0.8
  };

 function myBill() {
    
    let total = 0;
    total += prices[shoppingList[0]] || 0;
    total += prices[shoppingList[1]] || 0;
    total += prices[shoppingList[2]] || 0;
    return total;
  }
  myBill() 

  console.log(myBill());


  // Exercise 5 : What’s In My Wallet ?

  function changeEnough(itemPrice, amountOfChange) {
    const changeNumber = amountOfChange.reduce((total, item) => total + coin, 0);
    if (changeNumber >= itemPrice) {
        return true;
      } else {
        return false;
      }
    }
    changeEnough(4.25, [25, 20, 5, 0]);



// Exercise 6 : Vacations Costs

function  hotelCost() {
nightNumber = prompt ("Enter the number of nights you would like to stay in the hotel: ")
if  (Number.isInteger(nightNumber))  {
    nightNumber= prompt("Please enter a number of nights: ");
}
return nightNumber * 140;
}
hotelCost() 
// (2)
function planeRideCost() {
    
    let destination = prompt("Where are you flying to? ");
    if(!destination.isString()) {
        destination = prompt("Please enter a destination: ");
    }
    if (destination == "London") {
        return 183;
      } else if (destination == "Paris") {
        return 220;
       } else {
        return 300;
      }
    }
    planeRideCost()
    // (3)

    function rentalCarCost() {
       let days = prompt("How many days would you like to rent the car? ");
       if (!Number.isInteger(days)) {
            days = prompt("Please enter a number of days: ");
          }
        
       let cost = days * 40;
          if (days > 10) {
          let = cost * 0.95;
              }
        
          return cost;
        }
        rentalCarCost()
        // (4)
        function totalVacationCost() {
            const hotelCost = hotelCost();
            const planeRideCost = planeRideCost();
            const rentalCarCost = rentalCarCost();
          
            return hotelCost + planeRideCost + rentalCarCost;
          }
          totalVacationCost()