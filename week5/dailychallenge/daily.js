document.getElementById("lib-button").addEventListener("click", function(event) {
    event.preventDefault();
    let noun = document.getElementById("noun").value
   let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value
    let verb = document.getElementById("verb").value
    let place = document.getElementById("place").value

   let story = `The ${adjective} ${noun}  talk ${person} ${verb} at ${place}.`
    document.getElementById("story").innerHTML = story;
  });

  document.getElementById("shuffle-button").addEventListener("click", function(event) {
    event.preventDefault();
    let  storiesOfHumans = [ `The first ${person} ancestors appeared between ${adjective} five million and ${noun} seven million years ago`,
    
   `Homo sapiens, the first modern humans, evolved from their early ${place} hominid predecessors ${verb} between 200,000 and 300,000 years ago.`];
  
   let story = storiesOfHumans[Math.floor(Math.random() * storiesOfHumans.length)]; 

   while (storiesOfHumans == story){
    storiesOfHumans= Math.floor(Math.random() * storiesOfHumans.length)
   } story = storiesOfHumans;

    document.getElementById("story").innerHTML = story; 
  });