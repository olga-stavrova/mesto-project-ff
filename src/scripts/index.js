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

import {
  //config,
  getAPIData,
  patchProfileData,
  addCardData,
  deleteCardData,
  changeAvatarCardData
} from "../scripts/api.js";

//const authToken = "8aaa1ad9-6ed1-4bcb-bc32-b56ed203ae01";
//const meEndpoint = "https://nomoreparties.co/v1/wff-cohort-6/users/me";
//const cardsEndpoint = "https://nomoreparties.co/v1/wff-cohort-6/cards";


const placesList = document.querySelector(".places__list");

//Вывести карточки на страницу
function renderCards(cardsList) {
  cardsList.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      apiData.userData,
      handleDeleteClick,
      handleLikeClick,
      openImageModal
    );
    placesList.appendChild(cardElement);
  });
}
/*
let apiData0 = await getAPIData();

console.log(apiData0);

//const apiKeys = Object.keys(apiData);
//console.log(apiKeys);

let projectCards0 = apiData0.cardsData;

//let projectCards = await getInitialCards();

projectCards0.forEach(function(cardData){
  if(cardData.owner._id===apiData0.userData._id){
    deleteCardData(cardData);
  }
});
/**/
let apiData = await getAPIData();
console.log(apiData);

let projectCards = apiData.cardsData;

const userLocalData = apiData.userData;

const userProfileURL = document.querySelector('.profile__image');
const userTitle = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");
userProfileURL.style.backgroundImage = `url(${userLocalData.avatar})`;
userTitle.textContent = userLocalData.name;
userDescription.textContent = userLocalData.about;
//renderCards(initialCards);

renderCards(projectCards);

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

const editAvatarForm = document.querySelector(".popup_edit_avatar");
const closeAvatarForm = editAvatarForm.querySelector(".popup__close");
editAvatarForm.classList.add("popup_is-animated");

closeAvatarForm.addEventListener("click", onClickCloseAvatarForm);
function onClickCloseAvatarForm() {
  closeModal(editAvatarForm);
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
  nameInput.value = userTitle.textContent;
  jobInput.value = userDescription.textContent;
}

function openCardModal() {
  openModal(addCardForm);
  clearValidation(addCardForm, validationConfig);
}

function openAvatarModal() {
  openModal(editAvatarForm);
  clearValidation(editAvatarForm, validationConfig);
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

const clickAvatarButton = document.querySelector(".profile__image");
clickAvatarButton.addEventListener("click", openAvatarModal);

// Находим форму в DOM. Находим поля формы в DOM
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

enableValidation(validationConfig);

// Обработчик «отправки» формы
function handleProfileFormSubmit(event) {
  event.preventDefault();
  userTitle.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  patchProfileData(nameInput.value, jobInput.value);
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

  let newCard = { name: cardNameInput.value, link: cardUrlInput.value };

  addCardData(cardNameInput.value, cardUrlInput.value)
  .then(data =>{
   console.log(data);
   newCard = data;
   const cardElement = createCard(
    newCard,
    apiData.userData,
    handleDeleteClick,
    handleLikeClick,
    openImageModal
  );
  placesList.insertBefore(cardElement, placesList.firstChild);
  })
   .catch((err) => {
    console.log(err);
    //newCard = undefined;
  });
  console.log(newCard);

  closeModal(addCardForm);
  addCardForm.querySelector(".popup__form").reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
addCardForm.addEventListener("submit", handleCardFormSubmit);

const avatarUrlInput = editAvatarForm.querySelector(".popup__input_type_url");
// Обработчик «отправки» формы
function handleAvatarFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  //console.log(avatarUrlInput.value)
  changeAvatarCardData(avatarUrlInput.value);
  userProfileURL.style.backgroundImage = `url(${avatarUrlInput.value})`;

  closeModal(editAvatarForm);
  //editAvatarForm.querySelector(".popup__form").reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
editAvatarForm.addEventListener("submit", handleAvatarFormSubmit);