function singSong(numberOfBottles) {
    for (let i = numberOfBottles; i > 0; i--) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      console.log(`Take one down, pass it around, ${i - 1} bottles of beer on the wall.`);
    }
    console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
 console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
  }
  
  singSong(99);