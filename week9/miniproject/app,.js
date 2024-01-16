
// part 1
const quotes = [
  { id: 1, author: "Walt Disney", quote: "All our dreams can come true if we have the courage to pursue them." },
  { id: 2, author: "Theodore Roosevelt", quote: "Do what you can, with what you have, where you are." },
  { id: 3, author: "Malala Yousafzai", quote: "One child, one teacher, one book, one pen can change the world." },
  { id: 4, author: "Groucho Marx", quote: "I wouldn't want to belong to any club that would have me as a member." },
  { id: 5, author: "Nelson Mandela", quote: "Education is the most powerful weapon which you can use to change the world." },
  { id: 6, author: "Mark Twain", quote: "The best way to predict your future is to create it." },
]

let lastId= null
function generateQuote(){
  const randomIndex  =  getRandomIndexExcludingLast()
  const quote = quotes[randomIndex];
  displayQuote(quote)
  lastId = quote.id;
}

function getRandomIndex () {
  const possibleIndices = quotes.map((quote, index) => index)
  .filter(index => index !== lastQuoteId);
  return possibleIndices[Math.floor(Math.random() * possibleIndices.length)];

}

function displayQuote(quote) {
  const quoteSection = document.getElementById("quote-section");
  quoteSection.innerHTML = `
    <p>${quote.quote}</p>
    <p class="author">- ${quote.author}</p>
  `;
}

document.getElementById("generate-quote").addEventListener("click", generateQuote); 


document.getElementById("add-quote-form").addEventListener("submit",(event)=>{
  event.preventDefault();
  const quote = document.getElementById("quote-input").value
  const author = document.getElementById("author-input").value;
  addQuote(quote, author);
})

function addQuote(quote, author) {
  const newQuote = { id: quotes.length, author: author, quote: quote };
  quotes.push(newQuote);
  displayQuote(newQuote); 
}


// part 2

document.getElementById("character-count").addEventListener("click", () => {
  const currentQuote = document.getElementById("quote-section").querySelector("p").textContent;
  const characterCount = currentQuote.length;
  alert(`Character count (with spaces): ${characterCount}`);
});

document.getElementById("character-count-no-spaces").addEventListener("click", () => {
  const currentQuote = document.getElementById("quote-section").querySelector("p").textContent.replace(/\s/g, "");
  const characterCountNoSpaces = currentQuote.length;
  alert(`Character count (no spaces): ${characterCountNoSpaces}`);
});

document.getElementById("word-count").addEventListener("click", () => {
  const currentQuote = document.getElementById("quote-section").querySelector("p").textContent;
  const wordCount = currentQuote.split(/\s+/).length;
  alert(`Word count: ${wordCount}`);
});

document.getElementById("like-quote").addEventListener("click", () => {
  const currentQuote = quotes.find(quote => quote.quote === document.getElementById("quote-section").querySelector("p").textContent);
  currentQuote.likes = (currentQuote.likes || 0) + 1;
  alert(`Quote liked! It now has ${currentQuote.likes} likes.`);
});

// part 3
let filteredQuotes = quotes; 
let currentQuoteIndex = 0;
document.getElementById("filter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const authorFilter = document.getElementById("author-filter").value.toLowerCase();

  filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorFilter));
  currentQuoteIndex = 0;
  displayQuote(filteredQuotes[currentQuoteIndex]);
});
document.getElementById("previous-quote").addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayQuote(filteredQuotes[currentQuoteIndex]);
});

document.getElementById("next-quote").addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
  displayQuote(filteredQuotes[currentQuoteIndex]);
});

