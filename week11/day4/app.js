// Exercise 1/2 : Giphy API

fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  .then(response => {
    if (!response.ok) {
      throw new Error(' response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



  //  Exercise 3 : Async Function


  async function getStarship() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error('response was not ok');
      }
      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getStarship();

  //   Exercise 4: Analyze
  // its calling after 2 seconds to resolve 

 


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
