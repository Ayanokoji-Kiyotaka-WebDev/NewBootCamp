

//1 



function getCarHonda(carInventory) {
    const hondaCar = carInventory.find((car))=>{
          car.car_make === 'Honda';

        if (hondaCar) {
            return 'This is a' +hondaCar.car_make +hondaCar.car_model + 'from' + hondaCar.car_year 
          } else {
            return 'No Honda car found in the inventory.';
          }
        
        
    }
}
  

  const result = getCarHonda(inventory);
console.log(result);


//  part |||


function sortCarInventoryByYear(carInventory) {
 
    const sortedInventory = carInventory.slice().sort((x, y) => 
     x.car_year - y.car_year);

  }

  return sortedInventory;


// welli try im stuck  here i will compelete it  with you  at class
  
  