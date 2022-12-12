console.clear();
import { createCharacterCard } from "./components/card/card.js";
// const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
let pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

let count = 1
let fetchAPI = "https://rickandmortyapi.com/api/character"
let testData = null
 export async function fetchCharacters () {
  try {
    if (count > 0) {
      fetchAPI = fetchAPI + `/${count}`
    }
    const response = await fetch(fetchAPI);
    const data = await response.json();
    getGlobalData(data)
    createCharacterCard(data)
  } catch(error) {
    console.error(error)
  }
}

fetchCharacters()




function getGlobalData(data) {
  testData = data
  console.log(testData)
}














nextButton.addEventListener("click", () => {
  if (count < 826) {
    fetchAPI = "https://rickandmortyapi.com/api/character"
    count++
    fetchCharacters()
    counter()
} else {
  return
}
})

prevButton.addEventListener("click", () => {
  if (count > 1) {
    fetchAPI = "https://rickandmortyapi.com/api/character"
    count--
    fetchCharacters()
    counter()
   } else {
    return
   }
})

async function counter() {
  const apineiu = "https://rickandmortyapi.com/api/character/"
  const response = await fetch(apineiu);
      const data = await response.json();
      pagination.textContent = count + " / " + `${data.info.count}`
  }
  
  counter()