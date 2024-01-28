function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const allStrings = words.every(word => typeof word === 'string');
      if (allStrings) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject('Array contains non-string elements');
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        reject('Array length is less than equal to 4');
      }
    });
  }