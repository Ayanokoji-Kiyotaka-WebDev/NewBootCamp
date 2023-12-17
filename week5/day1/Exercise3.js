// Exercise 3 : Change The Navbar


// (2) // (3 (1-4))

document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');


let newListItem = document.createElement('li');

let textNode = document.createTextNode('Logout');

newListItem.appendChild(textNode);

document.querySelector('#socialNetworkNavigation ul').appendChild(newListItem);

let firstListItem = document.querySelector('#socialNetworkNavigation ul').firstElementChild;
let lastListItem = document.querySelector("#socialNetworkNavigation ul").lastElementChild;

console.log(firstListItem.textContent);
console.log(lastListItem.textContent);