// // # 1 -  // Prediction: a will be 3

// // #1.2 What will happen if the variable is declared with const instead of let?
// // Error: Assignment to constant variable. Const variables cannot be reassigned.


// // a is reassigned within the function's scope


// //#2
// let a = 0;
// // Global variable a 

// a = 5; // Modifies the global variable a

//  // Prediction: a will be 0, then 5


//  // #2.2 What will happen if the variable is declared with const instead of let?
//  // Error: Assignment to constant variable. Const variables cannot be reassigned, even globally.

//  // #3

//  // Prediction: a will be "hello"

//  window.a = "hello"; // Creates a global variable on the window object

//  funcFour(); // Creates window.a
// funcFive(); // Output: "inside the funcFive function hello"


// //#4
// // let a = 1; // Global variable a

// //   Prediction: a will be "test" within the function

// // let a = "test"; // Local variable a shadows the global a

// // #4.1 - run in the console:
// funcSix(); // Output: "inside the funcSix function test"

// // #4.2 What will happen if the variable is declared with const instead of let?
// // No difference in output Const only prevents reassignment, not shadowing.

// // #5

// // Prediction: a will be 5 within the if block, then 2 outside
// // #5.1 - run the code in the console
// // Output: "in the if block 5"
// //         "outside of the if block 2"

// // #5.2 What will happen if the variable is declared with const instead of let?
// // Error: Assignment to constant variable, Const variables cannot be reassigned, even within blocks.



// Exercise 2 : Ternary Operator

const winBattle = () => true; 

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); 
// 10

// Exercise 3 : Is It A String ?

const isString = (value) => typeof value === 'string';


console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false
 
// Exercise 4 : Colors

 const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


 for (let i = 0; i <colors.length; i++){
    console.log(`${i + 1}# choice is ${colors[i]}`);
 }

 const violetPresent = colors.includes("Violet");

 console.log(violetPresent ? "Yeah" : "No...");


 // Exercise 5 : Colors #2

 const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];


for (let i = 0; i < colors.length; i++) {
    const suffix = i > 3 ? "th" : ordinal[i];
    console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
}

// Exercise 5 
const  per = 18;

let bankAmout =  5000
let monthExpenss =   ["+150", "-100", "+126", "+167", "-900"];

modExpensss = monthExpenss.map(expense => {
    const amount = parseFloat(expense);
    const expenseWithper = amount * (1 + per / 100);
    return expenseWithper.toFixed(2);

});

let totalbalance = bankAmout

for (const expense of modExpensss){
    totalbalance+=parseFloat(expense)
}

console.log(`Your final bank balance for the month is: ${totalbalance.toFixed(2)}`);