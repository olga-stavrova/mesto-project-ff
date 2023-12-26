// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки

const onDeleteClick = (clickEvent) => {
  const listItem = clickEvent.target.closest(".card");
  listItem.remove();
};

// @todo: Вывести карточки на страницу

function renderCards(cardsList) {
  cardsList.forEach(function (cardData) {
    const cardElement = createCard(cardData, onDeleteClick);
    placesList.appendChild(cardElement);
  });
}

renderCards(initialCards);
