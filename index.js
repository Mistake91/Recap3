console.clear();
// const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

let fetchAPI = "https://rickandmortyapi.com/api/character"

async function fetchCharacters (count=0) {
  try {
    if (count > 0) {
      fetchAPI = fetchAPI + `/${count}`
    }
    const response = await fetch(fetchAPI);
    const data = await response.json();
    console.log(data)
  } catch(error) {
    console.error(error)
  }
}

fetchCharacters(30)