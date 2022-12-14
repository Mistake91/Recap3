// console.clear();
import { createCharacterCard } from "./components/card/card.js";
// const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
// const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
let pagination = document.querySelector('[data-js="pagination"]');

// States
// const maxPage = 1;
// const page = 1;
// const searchQuery = "";

const fetchAPI = "https://rickandmortyapi.com/api/character";

let count = 1;
export async function fetchCharacters() {
  let newFetchAPI = null;
  if (count > 0) {
    newFetchAPI = fetchAPI + `/${count}`;
    // console.log(newFetchAPI);
  }
  try {
    const response = await fetch(newFetchAPI);
    const data = await response.json();
    createCharacterCard(data);
  } catch (error) {
    console.error(error);
  }
}

//Zeigt ersten Character an
fetchCharacters();

async function counter() {
  const apineiu = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(apineiu);
  const data = await response.json();
  pagination.textContent = count + " / " + `${data.info.count}`;
  // console.log(data);
}

counter();

nextButton.addEventListener("click", () => {
  if (count < 826) {
    count++;
    fetchCharacters();
    counter();
  } else {
    return;
  }
});

prevButton.addEventListener("click", () => {
  if (count > 1) {
    count--;
    fetchCharacters();
    counter();
  } else {
    return;
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchName(event.target.elements.query.value);
});

async function fetchName(name) {
  const newFetchAPI = fetchAPI + "/?name=" + name;
  console.log(newFetchAPI);
  try {
    const response = await fetch(newFetchAPI);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//*********************************************** */
testFunction(fetchAPI);

let countCharacters = 0;

async function testFunction(fetchAPI) {
  try {
    const response = await fetch(fetchAPI);
    const data = await response.json();
    countCharacters = data.info.count;
    createArray(countCharacters);
  } catch (error) {
    console.error(error);
  }
}

async function createArray(number) {
  const testArray = [];
  const newFetchAPI = fetchAPI;
  let counter = 1;
  while (counter < number) {
    try {
      const response = await fetch(newFetchAPI + `/${counter}`);
      const data = await response.json();
      testArray.push(data);
    } catch (error) {
      console.error(error);
    }
    counter++;
  }
  console.log(testArray);
}
