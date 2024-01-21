

function str(str1, str2) {
    str1 = str1.toLowerCase().replace(s/g, '');
  str2 = str2.toLowerCase().replace(s/g, '');
  if (str1.length !== str2.length) {
    return false;
  }
}

console.log(str ("Astronomer", "Moon starer")); 
console.log(str("School master", "The classroom")); 
console.log(str("hello", "world")); 
