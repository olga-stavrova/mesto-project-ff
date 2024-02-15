import "../pages/index.css";
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
  getAPIData,
  patchProfileData,
  addCardData,
  changeAvatarData,
} from "../scripts/api.js";

import { loadingButtonText } from "../scripts/utils.js";

const popupConfig = {
  closeSelector: ".popup__close",
  inputTypeUrlSelector: ".popup__input_type_url",
  animatedClass: "popup_is-animated",
};

const placesList = document.querySelector(".places__list");

//Функция вывода карточек на страницу
function renderCards(cardsList, userData) {
  cardsList.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      userData,
      handleDeleteClick,
      handleLikeClick,
      openImageModal
    );
    placesList.appendChild(cardElement);
  });
}

//Готовим данные профиля пользователя
const userProfileURL = document.querySelector(".profile__image");
const userTitle = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");

let projectCards = [];
let userLocalData = {};

//Забираем данные с сервера
await getAPIData()
  .then(([cardsData, userData]) => {
    projectCards = cardsData;
    userLocalData = userData;

    //Отображаем данные профиля пользователя
    userTitle.textContent = userLocalData.name;
    userDescription.textContent = userLocalData.about;
    userProfileURL.style.backgroundImage = `url(${userLocalData.avatar})`;

    //Отображаем карточки на странице
    renderCards(projectCards, userLocalData);
  })
  .catch((err) => {
    console.log(err);
  });

//Готовим форму редактирования профиля
const profileEditPopup = document.querySelector(".popup_type_edit");

const profileCloseButton = profileEditPopup.querySelector(
  popupConfig.closeSelector
);
profileEditPopup.classList.add(popupConfig.animatedClass);

profileCloseButton.addEventListener("click", onClickCloseProfilePopup);
function onClickCloseProfilePopup() {
  closeModal(profileEditPopup);
}

//Описываем поля формы редактирования профиля
const nameInput = profileEditPopup.querySelector(".popup__input_type_name");
const jobInput = profileEditPopup.querySelector(
  ".popup__input_type_description"
);

//Готовим форму добавления карточки
const cardAddPopup = document.querySelector(".popup_type_new-card");
const cardCloseButton = cardAddPopup.querySelector(popupConfig.closeSelector);
cardAddPopup.classList.add(popupConfig.animatedClass);
const cardForm = cardAddPopup.querySelector(validationConfig.formSelector);

cardCloseButton.addEventListener("click", onClickCloseCardPopup);
function onClickCloseCardPopup() {
  closeModal(cardAddPopup);
  //cardAddPopup.querySelector(validationConfig.formSelector).reset(); //исключено по требованию ревьюера
}

//Описываем поля формы карточки
const cardNameInput = cardAddPopup.querySelector(
  ".popup__input_type_card-name"
);
const cardUrlInput = cardAddPopup.querySelector(
  popupConfig.inputTypeUrlSelector
);

//Готовим форму смены аватара
const avatarEditPopup = document.querySelector(".popup__edit_avatar");
const avatarCloseButton = avatarEditPopup.querySelector(
  popupConfig.closeSelector
);
avatarEditPopup.classList.add(popupConfig.animatedClass);
const avatarForm = avatarEditPopup.querySelector(validationConfig.formSelector);

avatarCloseButton.addEventListener("click", onClickCloseAvatarPopup);
function onClickCloseAvatarPopup() {
  closeModal(avatarEditPopup);
  //avatarEditPopup.querySelector(validationConfig.formSelector).reset(); //исключено по требованию ревьюера
}

//Описываем поля формы аватара
const avatarUrlInput = avatarEditPopup.querySelector(
  popupConfig.inputTypeUrlSelector
);

//Готовим форму отображения картинки карточки
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupClose = imagePopup.querySelector(popupConfig.closeSelector);
imagePopup.classList.add(popupConfig.animatedClass);

imagePopupClose.addEventListener("click", onClickCloseImage);
function onClickCloseImage() {
  closeModal(imagePopup);
}

const imagePopupContent = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

//Описываем функции открытия модальных окон
function openProfileModal() {
  openModal(profileEditPopup);
  clearValidation(profileEditPopup, validationConfig);
  nameInput.value = userTitle.textContent;
  jobInput.value = userDescription.textContent;
}

function openCardModal() {
  openModal(cardAddPopup);
  //clearValidation(cardAddPopup, validationConfig); //исключено по требованию ревьюера
}

function openAvatarModal() {
  openModal(avatarEditPopup);
  //clearValidation(avatarEditPopup, validationConfig); //исключено по требованию ревьюера
}

function openImageModal(clickEvent) {
  openModal(imagePopup);
  const cardImage = clickEvent.target;
  imagePopupCaption.textContent = cardImage.alt;
  imagePopupContent.src = cardImage.src;
  imagePopupContent.alt = cardImage.alt;
}

//Готовим обработку оверлеев
const overlays = document.querySelectorAll(".popup");
overlays.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClose);
});

//Добавляем обработчики событий по клику на кнопки открытия модальных окон
const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", openProfileModal);

const cardAddButton = document.querySelector(".profile__add-button");
cardAddButton.addEventListener("click", openCardModal);

userProfileURL.addEventListener("click", openAvatarModal);

// Обработчик «отправки» формы редактирования профиля
function handleProfileSubmitButton(event) {
  event.preventDefault();

  const buttonElement = event.submitter;

  const savedText = loadingButtonText(buttonElement, "Сохранение...");
  patchProfileData(nameInput.value, jobInput.value)
    .then(() => {
      userTitle.textContent = nameInput.value;
      userDescription.textContent = jobInput.value;
      closeModal(profileEditPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonElement.textContent = savedText;
    });
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
profileEditPopup.addEventListener("submit", handleProfileSubmitButton);

// Обработчик «отправки» формы карточки
function handleCardSubmitButton(event) {
  event.preventDefault();

  const buttonElement = event.submitter;

  const savedText = loadingButtonText(buttonElement, "Сохранение...");
  addCardData(cardNameInput.value, cardUrlInput.value)
    .then((newCard) => {
      const cardElement = createCard(
        newCard,
        userLocalData,
        handleDeleteClick,
        handleLikeClick,
        openImageModal
      );
      placesList.insertBefore(cardElement, placesList.firstChild);
      closeModal(cardAddPopup);
      cardForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonElement.textContent = savedText;
    });
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
cardAddPopup.addEventListener("submit", handleCardSubmitButton);

// Обработчик «отправки» формы смены аватара
function handleAvatarSubmitButton(event) {
  event.preventDefault();

  const buttonElement = event.submitter;
  const savedText = loadingButtonText(buttonElement, "Сохранение...");
  changeAvatarData(avatarUrlInput.value)
    .then(() => {
      userProfileURL.style.backgroundImage = `url(${avatarUrlInput.value})`;
      closeModal(avatarEditPopup);
      avatarForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonElement.textContent = savedText;
    });
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
avatarEditPopup.addEventListener("submit", handleAvatarSubmitButton);

//Включаем валидации форм
enableValidation(validationConfig);
