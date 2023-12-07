function playTheGame () {
    let startTheGame = confirm("Would you like to play the game?");
if (!startTheGame) {
alert ("No problem, Goodbye")
}
else { 
  let userNumber = prompt("Enter a number between 0 and 10:");


if  (isNaN(userNumber)) {
    alert('Sorry, Not a number Goodbye');
} else if (userNumber < 0 || userNumber > 11) {
    alert('Sorry, its not a good number Goodbye');
} else {
    let computerNumber = Math.floor(Math.random() * 11);
 
    compareNumbers( userNumber, computerNumber);
 }
}  
}
 
// Second Part


 function compareNumbers(userNumber,computerNumber) {
    for (let i = 0; i < 3; i++) {
if (userNumber === computerNumber){ 
         alert ('WINNER')
        return
} else if ( userNumber > computerNumber) {
userNumber = prompt ('Your number is bigger then the computers, guess again')


}  else  { 
    (userNumber < computerNumber) 
  username  = prompt ( '  Your number is smaller then the computers, guess again ')

}
    alert ('out of chances')
}
 }


