const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard(element) {
  cardContainer.innerHTML = '';
  const createList = document.createElement("li");
  createList.classList.add("card");

  const createImageContainer = document.createElement("div");
  createImageContainer.classList.add("card__image-container");

  const createCardImage = document.createElement("img");
  createCardImage.classList.add("card_image");
  createCardImage.setAttribute = `src = ${element.image}`;
  createCardImage.setAttribute = `alt = ${element.name}`;

  const createCardImageGradient = document.createElement("div");
  createCardImageGradient.classList.add("card__image-gradient");
  
  createImageContainer.append(createCardImage, createCardImageGradient);
  
  const createCardContent = document.createElement("div");
  createCardContent.classList.add("card__content");

  const createCardHeader = document.createElement("h2");
  createCardHeader.classList.add("card__title");
    createCardHeader.textContent = `${element.name}`;

    const createCardInfo = document.createElement("dl");
    createCardInfo.classList.add("card__info");

    const createCardTitle = document.createElement("dt");
    createCardInfo.classList.add("card__info-title");
    createCardInfo.textContent = "Status ";

    const createCardInfoDescription = document.createElement("dd");
    createCardInfoDescription.classList.add("card__info-description");
    createCardInfoDescription.textContent = `${element.status}`;

    const createCardType = document.createElement("dt");
    createCardType.classList.add("card__info-title");
    createCardType.textContent = "Type ";

    const createCardTypeDescription = document.createElement("dd");
    createCardTypeDescription.classList.add("card__info-title");
    createCardTypeDescription.textContent = `${element.type}`;

    const createCardOcurrences = document.createElement("dt");
    createCardOcurrences.classList.add("card__info-title");
    createCardOcurrences.textContent = "Occurences ";

    const createCardOcurrencesDescription = document.createElement("dd");
    createCardOcurrencesDescription.classList.add("card__info-description");
    createCardOcurrencesDescription.textContent = `${element.location}`;

createCardInfo.append(createCardTitle, createCardInfoDescription, createCardType, createCardTypeDescription, createCardOcurrences, createCardOcurrencesDescription);

createCardContent.append(createCardHeader, createCardInfo);

createList.append(createImageContainer, createCardContent);

cardContainer.append(createList);

}
