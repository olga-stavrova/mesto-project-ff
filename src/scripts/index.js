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

const popupConfig = {
  closeSelector: ".popup__close",
  inputTypeUrlSelector: ".popup__input_type_url",
  animatedClass: "popup_is-animated",
};

const placesList = document.querySelector(".places__list");

//Функция вывода карточек на страницу
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

//Забираем данные с сервера
const apiData = await getAPIData();
const projectCards = apiData.cardsData;
const userLocalData = apiData.userData;

//Отображаем данные профиля пользователя
const userProfileURL = document.querySelector(".profile__image");
const userTitle = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");

userTitle.textContent = userLocalData.name;
userDescription.textContent = userLocalData.about;
userProfileURL.style.backgroundImage = `url(${userLocalData.avatar})`;

//Отображаем карточки на странице
renderCards(projectCards);

//Готовим форму редактирования профиля
const profileEditForm = document.querySelector(".popup_type_edit");
const profileCloseForm = profileEditForm.querySelector(
  popupConfig.closeSelector
);
profileEditForm.classList.add(popupConfig.animatedClass);

profileCloseForm.addEventListener("click", onClickCloseProfileForm);
function onClickCloseProfileForm() {
  closeModal(profileEditForm);
}

//Описываем поля формы редактирования профиля
const nameInput = profileEditForm.querySelector(".popup__input_type_name");
const jobInput = profileEditForm.querySelector(
  ".popup__input_type_description"
);

//Готовим форму добавления карточки
const cardAddForm = document.querySelector(".popup_type_new-card");
const cardCloseForm = cardAddForm.querySelector(popupConfig.closeSelector);
cardAddForm.classList.add(popupConfig.animatedClass);

cardCloseForm.addEventListener("click", onClickCloseCardForm);
function onClickCloseCardForm() {
  closeModal(cardAddForm);
  cardAddForm.querySelector(validationConfig.formSelector).reset();
}

//Описываем поля формы карточки
const cardNameInput = cardAddForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = cardAddForm.querySelector(
  popupConfig.inputTypeUrlSelector
);

//Готовим форму смены аватара
const avatarEditForm = document.querySelector(".popup__edit_avatar");
const avatarCloseForm = avatarEditForm.querySelector(popupConfig.closeSelector);
avatarEditForm.classList.add(popupConfig.animatedClass);

avatarCloseForm.addEventListener("click", onClickCloseAvatarForm);
function onClickCloseAvatarForm() {
  closeModal(avatarEditForm);
  avatarEditForm.querySelector(validationConfig.formSelector).reset();
}

//Описываем поля формы аватара
const avatarUrlInput = avatarEditForm.querySelector(
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
  openModal(profileEditForm);
  clearValidation(profileEditForm, validationConfig);
  nameInput.value = userTitle.textContent;
  jobInput.value = userDescription.textContent;
}

function openCardModal() {
  openModal(cardAddForm);
  clearValidation(cardAddForm, validationConfig);
}

function openAvatarModal() {
  openModal(avatarEditForm);
  clearValidation(avatarEditForm, validationConfig);
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

//Функция отображения процесса загрузки "сохранение..."
function loadingButtonText(buttonElement) {
  const buttonText = buttonElement.textContent;
  buttonElement.textContent = "Сохранение...";
  return buttonText;
}

// Обработчик «отправки» формы редактирования профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  userTitle.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  const buttonElement = profileEditForm.querySelector(
    validationConfig.submitButtonSelector
  );
  const savedText = loadingButtonText(buttonElement);
  patchProfileData(nameInput.value, jobInput.value).finally(() => {
    buttonElement.textContent = savedText;
  });
  closeModal(profileEditForm);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

// Обработчик «отправки» формы карточки
function handleCardFormSubmit(event) {
  event.preventDefault();

  let newCard = { name: cardNameInput.value, link: cardUrlInput.value };
  const buttonElement = cardAddForm.querySelector(
    validationConfig.submitButtonSelector
  );
  const savedText = loadingButtonText(buttonElement);
  addCardData(cardNameInput.value, cardUrlInput.value)
    .then((data) => {
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
    })
    .finally(() => {
      buttonElement.textContent = savedText;
    });

  closeModal(cardAddForm);
  cardAddForm.querySelector(validationConfig.formSelector).reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
cardAddForm.addEventListener("submit", handleCardFormSubmit);

// Обработчик «отправки» формы смены аватара
function handleAvatarFormSubmit(event) {
  event.preventDefault();

  const buttonElement = avatarEditForm.querySelector(
    validationConfig.submitButtonSelector
  );
  const savedText = loadingButtonText(buttonElement);
  userProfileURL.style.backgroundImage = `url(${avatarUrlInput.value})`;
  changeAvatarData(avatarUrlInput.value).finally(() => {
    buttonElement.textContent = savedText;
  });

  closeModal(avatarEditForm);
  avatarEditForm.querySelector(validationConfig.formSelector).reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
avatarEditForm.addEventListener("submit", handleAvatarFormSubmit);

//Включаем валидации форм
enableValidation(validationConfig);
