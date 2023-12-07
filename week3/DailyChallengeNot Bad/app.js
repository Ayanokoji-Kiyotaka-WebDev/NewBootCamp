// Daily Challenge: Not Bad

// (1)
const sentence = 'daily challenge is not bad, i like it'
// (2)
const wordNot = sentence.indexOf("not");
console.log(wordNot);
//(3)
const wordBad = sentence.indexOf("bad");
console.log(wordBad);
//

if (wordBad > wordNot) {
     const Newsentence = sentence.replace("not bad", "good");
     console.log(Newsentence)
  }












