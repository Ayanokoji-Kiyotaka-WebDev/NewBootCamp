 // 1 Retrieve the form and console.log it.
let formElement = document.getElementById('myForm');
  console.log(formElement);
   // 1 Retrieve the inputs by their id and console.log them.
 let firstNameInput = document.getElementById('fname');
 let lastNameInput = document.getElementById('lname');
  console.log(firstNameInput, lastNameInput);

// Retrieve the inputs by their name attribute and console.log them.
  let inputsByName = document.getElementsByName('firstname');
  console.log(inputsByName);

// 4 When the user submits the form (ie. submit event listener)
  formElement.addEventListener('submit', function (event) {
      event.preventDefault(); 

      
     let firstNameValue = firstNameInput.value;
      let lastNameValue = lastNameInput.value;

    
      if (firstNameValue && lastNameValue) {
        
          let ulEl = document.querySelector('.usersAnswer');
     let firstLi = document.createElement('li');
        let lastLi = document.createElement('li');
          firstNameLi.textContent = `First name: ${firstNameValue}`;
       lastNameLi.textContent = `Last name: ${lastNameValue}`;

          ulEl.innerHTML = ''; 
      ulEl.appendChild(firstLi);
          ulEl.appendChild(lastLi);
      }
  });