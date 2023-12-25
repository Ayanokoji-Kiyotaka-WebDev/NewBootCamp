function onlyLetters(event) {
   let inputValue = event.target.value;
    let lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');
    event.target.value = lettersOnly;
}