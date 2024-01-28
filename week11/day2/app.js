function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve("Number is less than or equal to 10");
      } else {
        reject("Number is greater than 10");
      }
    });
  }

  compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


  //  Exercise 2 : Promises



  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });


  // Exercise 3 : Resolve & Reject

  const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Boo!");