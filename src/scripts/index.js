import "../pages/index.css";
import { initialCards } from "../scripts/cards.js";
import {
  createCard,
  handleDeleteClick,
  handleLikeClick,
} from "../scripts/card.js";
import {
  openModal,
  closeModal,
  handleEscClose,
  handleOverlayClose,
} from "../scripts/modal.js";

const placesList = document.querySelector(".places__list");

//Вывести карточки на страницу
function renderCards(cardsList) {
  cardsList.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      handleDeleteClick,
      handleLikeClick,
      openImageModal
    );
    placesList.appendChild(cardElement);
  });
}

renderCards(initialCards);

const editProfileForm = document.querySelector(".popup_type_edit");
const addCardForm = document.querySelector(".popup_type_new-card");
const overlays = document.querySelectorAll(".popup");
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupContent = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function openProfileModal() {
  openModal(editProfileForm);
}

function openCardModal() {
  openModal(addCardForm);
}

function openImageModal(clickEvent) {
  openModal(imagePopup);
  const currentCard = clickEvent.target.closest(".card");
  const cardTitle = currentCard.querySelector(".card__title");
  const cardImage = currentCard.querySelector(".card__image");
  imagePopupCaption.textContent = cardTitle.textContent;
  imagePopupContent.src = cardImage.src;
}

overlays.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClose);
});

const clickProfileButton = document.querySelector(".profile__edit-button");
clickProfileButton.addEventListener("click", openProfileModal);

const clickCardButton = document.querySelector(".profile__add-button");
clickCardButton.addEventListener("click", openCardModal);

// Находим форму в DOM
// Находим поля формы в DOM
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

nameInput.value = document.querySelector(".profile__title").textContent;
jobInput.value = document.querySelector(".profile__description").textContent;

// Обработчик «отправки» формы
function handleFormSubmit(event) {
  event.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;

  closeModal(editProfileForm);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
editProfileForm.addEventListener("submit", handleFormSubmit);

// Находим поля формы в DOM
const cardNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");

// Обработчик «отправки» формы
function handleCardFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const newCard = { name: cardNameInput.value, link: cardUrlInput.value };
  cardNameInput.value = "";
  cardUrlInput.value = "";
  initialCards.unshift(newCard);
  const cardElement = createCard(
    newCard,
    handleDeleteClick,
    handleLikeClick,
    openImageModal
  );
  placesList.insertBefore(cardElement, placesList.firstChild);

  closeModal(addCardForm);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
addCardForm.addEventListener("submit", handleCardFormSubmit);
