import "../pages/index.css";
import { initialCards } from "../scripts/cards.js";
import {
  createCard,
  handleDeleteClick,
  handleLikeClick,
} from "../scripts/card.js";
import { openModal, closeModal, handleOverlayClose } from "../scripts/modal.js";
import {
  validationConfig,
  enableValidation,
  clearValidation,
} from "../scripts/validation.js";

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
const closeProfileForm = editProfileForm.querySelector(".popup__close");
editProfileForm.classList.add("popup_is-animated");

closeProfileForm.addEventListener("click", onClickCloseProfileForm);
function onClickCloseProfileForm() {
  closeModal(editProfileForm);
}

const addCardForm = document.querySelector(".popup_type_new-card");
const closeCardForm = addCardForm.querySelector(".popup__close");
addCardForm.classList.add("popup_is-animated");

closeCardForm.addEventListener("click", onClickCloseCardForm);
function onClickCloseCardForm() {
  closeModal(addCardForm);
  addCardForm.querySelector(".popup__form").reset();
}

const overlays = document.querySelectorAll(".popup");
const imagePopup = document.querySelector(".popup_type_image");
const closeImagePopup = imagePopup.querySelector(".popup__close");
imagePopup.classList.add("popup_is-animated");

closeImagePopup.addEventListener("click", onClickCloseImage);
function onClickCloseImage() {
  closeModal(imagePopup);
}

const imagePopupContent = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function openProfileModal() {
  openModal(editProfileForm);
  clearValidation(editProfileForm, validationConfig);
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
}

function openCardModal() {
  openModal(addCardForm);
  clearValidation(addCardForm, validationConfig);
}

function openImageModal(clickEvent) {
  openModal(imagePopup);
  const cardImage = clickEvent.target;
  imagePopupCaption.textContent = cardImage.alt;
  imagePopupContent.src = cardImage.src;
  imagePopupContent.alt = cardImage.alt;
}

overlays.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClose);
});

const clickProfileButton = document.querySelector(".profile__edit-button");
clickProfileButton.addEventListener("click", openProfileModal);

const clickCardButton = document.querySelector(".profile__add-button");
clickCardButton.addEventListener("click", openCardModal);

// Находим форму в DOM. Находим поля формы в DOM
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

enableValidation(validationConfig);

// Обработчик «отправки» формы
function handleProfileFormSubmit(event) {
  event.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;

  closeModal(editProfileForm);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// Находим поля формы в DOM
const cardNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");

// Обработчик «отправки» формы
function handleCardFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const newCard = { name: cardNameInput.value, link: cardUrlInput.value };
  const cardElement = createCard(
    newCard,
    handleDeleteClick,
    handleLikeClick,
    openImageModal
  );
  placesList.insertBefore(cardElement, placesList.firstChild);

  closeModal(addCardForm);
  addCardForm.querySelector(".popup__form").reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
addCardForm.addEventListener("submit", handleCardFormSubmit);
