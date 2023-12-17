// 🌟 Exercise 1 : Change The Article
// 1Using a DOM property, retrieve the h1 and console.log it.
let h1Element = document.querySelector('h1');
console.log(h1Element);

// 2Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article');
let paragraphs = article.querySelectorAll('p');
article.removeChild(paragraphs[paragraphs.length - 1]);

// 3Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

// (4) Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3Element = document.querySelector('h3');
if (h3Element) {
    h3Element.addEventListener('click', function() {
        h3Element.style.display = 'none';
    });
}

// (5)Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let boldBtn = document.getElementById('boldButton');
boldBtn.addEventListener('click', function() {
    paragraphs.forEach(function(p) {
        p.style.fontWeight = 'bold';
    });
});
