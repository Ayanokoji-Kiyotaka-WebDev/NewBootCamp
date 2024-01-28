



//Daily Challenge: Gifs


const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.querySelector("form");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");




form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const category = event.target.elements.category.value;
  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const gifUrl = data.data.images.downsized.url;
    const gif = createGifElement(gifUrl, category);
    gifContainer.appendChild(gif);
  } catch (error) {
    console.error("Error:", error);
  }
});

gifContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});

deleteAllButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
