const loadBtn = document.getElementById('load-btn');
const characterContainer = document.getElementById('character-container');
const loadingStar = document.getElementById('loading-Star');

loadBtn.addEventListener('click', loadCharacter);

async function loadCharacter() {
  try {
    loadingStar.style.display = 'block';
    characterContainer.style.display = 'none';

    const url = 'https://www.swapi.tech/api/people/';
    const randomNumber = Math.floor(Math.random() * 83) + 1;
    const randomUrl = `${url}${randomNumber}`;

    const response = await fetch(randomUrl);
    const data = await response.json();
    const character = data.result.properties;

    const name = character.name;
    const height = character.height;
    const gender = character.gender;
    const birthYear = character.birth_year; 
    const homeWorldUrl = character.homeworld;

    const homeWorldResponse = await fetch(homeWorldUrl);
    const homeWorldData = await homeWorldResponse.json();
    const homeWorld = homeWorldData.result.properties.name;

    displayInfo(name, height, gender, birthYear, homeWorld);
  } catch (error) {
    console.error('Error fetching character:', error);
  } finally {
    loadingStar.style.display = 'none';
    characterContainer.style.display = 'block';
  }
}

function displayInfo(name, height, gender, birthYear, homeWorld) {
  document.getElementById('name').textContent = name;
  document.getElementById('height').textContent = height;
  document.getElementById('gender').textContent = gender;
  document.getElementById('birth-year').textContent = birthYear;
  document.getElementById('home-world').textContent = homeWorld;
}