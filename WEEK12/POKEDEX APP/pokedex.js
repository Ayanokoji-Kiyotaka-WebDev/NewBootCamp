
const randomBtn = document.getElementById("random-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const pokemonContainer = document.getElementById('pokemon-container');
const loading = document.getElementById('loading');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonHeight = document.getElementById("pokemon-height");
const pokemonWeight = document.getElementById("pokemon-weight");
const pokemonType = document.getElementById("pokemon-type");
const currentPokemon = document.getElementById("current-pokemon");
const pokemonInfo = document.getElementById("pokemon-info");

let currentPokemonId = 1;

const fetchPokemon = async (id) => {
  try {
    const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Oh no isn’t available");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const displayPokemonData = async (id) => {
  loading.classList.remove("hidden");
  pokemonInfo.classList.add("hidden");

  const data = await fetchPokemon(id);
  if (data) {
    pokemonInfo.classList.remove("hidden");
    loading.classList.add('hidden');
    pokemonImage.src = data.sprites.front_default;
    pokemonName.textContent = data.name;
    pokemonId.textContent = data.id;
    pokemonHeight.textContent = `${data.height / 10}m`;
    pokemonWeight.textContent = `${data.weight / 10}kg`;
    pokemonType.textContent = data.types.map((type) => type.type.name).join(", ");
    currentPokemon.textContent = `#${currentPokemonId} ${data.name}`;
  }
};

randomBtn.addEventListener('click', async () => {
  currentPokemonId = Math.floor(Math.random() * 898) + 1;
  await displayPokemonData(currentPokemonId);
});

previousBtn.addEventListener('click', async () => {
  if (currentPokemonId > 1) {
    currentPokemonId--;
    await displayPokemonData(currentPokemonId);
  }
});

nextBtn.addEventListener('click', async () => {
  const data = await fetchPokemon(currentPokemonId + 1);
  if (data) {
    currentPokemonId++;
    displayPokemonData(currentPokemonId);
  }
});

displayPokemonData(currentPokemonId);