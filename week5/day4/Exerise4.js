document.getElementById('MyForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

 let radius = parseFloat(document.getElementById('radius').value);

    
    if (!isNaN(radius)) {
        
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      
        document.getElementById('volume').value = volume.toFixed(2); // Round to 2 decimal places
    } else {
        alert('Please enter a valid numeric radius.');
    }
});