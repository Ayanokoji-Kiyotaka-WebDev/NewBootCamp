// hw  Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;

if (x>y){
    console.log( ' x is the bigeer number here');
}
else if ( y > x){
    console.log('y is the bigeer number');
}
else {
    console.log( 'x and y are equal' );
}

//  Exercise 2: Chihuahua

let newDog = ' chihuahua'

let NumberLetter = newDog.length
console.log( NumberLetter);



console.log(newDog.toUpperCase ());
console.log(newDog.toLowerCase ());

if (newDog ==  'chihuahua'){
    console.log( 'I love Chihuahuas, its my favorite dog breed');
}
else (newDog != 'chihuahua') 

    console.log ('I dont care, I prefer cats')
7
    

//  Exercise 3: Even Or Odd

let userNumbers =  prompt ( 'Enter even or ood number' )
let number = parseInt (userNumbers)
if ( number % 2 === 0)  {
    alert ( 'number is an even number ') 
} 

else {
    alert (' number is an odd number ')
}


// Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log( user.length());


if (users.length === 0){
    console.log('no one is online')
}

if (user.length === 0) {
    console.log ('no one is online')
}
else if (user.length === 1) {
    console.log('Lea 123 is online')
}

else if (user.length === 2){
    console .log ('Lea 123  and Princess 45 are online ')
}

else {
    console.log( 'Lea 123'+ ", " + "Princess45" + " and " + (users.length - 2) + " more are online");
}



