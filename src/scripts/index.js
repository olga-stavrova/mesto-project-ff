import '../pages/index.css';
import { initialCards } from '../scripts/cards.js';
// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");


// @todo: Функция создания карточки
//card.js
function createCard(cardData, deleteCardFunction, likeCardFunction) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.addEventListener("click", openImageModal);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCardFunction);

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCardFunction);
  return cardElement;
}

// @todo: Функция удаления карточки
//card.js
function onDeleteClick (clickEvent) {
  const listItem = clickEvent.target.closest(".card");
  listItem.remove();
};

//card.js
//функция лайка карточки
function onLikeClick (clickEvent) {
  clickEvent.target.classList.toggle('card__like-button_is-active');
};

// @todo: Вывести карточки на страницу
//index.js
function renderCards(cardsList) {
  cardsList.forEach(function (cardData) {
    const cardElement = createCard(cardData, onDeleteClick, onLikeClick);
    placesList.appendChild(cardElement);
  });
}

renderCards(initialCards);

//modal.js
//открытие модального окна формы
const editProfileForm = document.querySelector('.popup_type_edit');
const closeProfileForm = editProfileForm.querySelector('.popup__close');
const addCardForm = document.querySelector('.popup_type_new-card');
const closeCardForm = addCardForm.querySelector('.popup__close');
const overlays = document.querySelectorAll('.popup');
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopup = imagePopup.querySelector('.popup__close');
const imagePopupContent = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');


function openProfileModal() {
  editProfileForm.classList.add('popup_is-opened');
  editProfileForm.classList.toggle('popup_is-animated');
  closeProfileForm.addEventListener('click', onClickCloseProfileForm);
  document.addEventListener('keydown', handleEscClose);
};

function onClickCloseProfileForm() {
  editProfileForm.classList.remove('popup_is-opened');
  closeProfileForm.removeEventListener('click', onClickCloseProfileForm);
  document.removeEventListener('keydown', handleEscClose);
};

function openCardModal() {
  addCardForm.classList.add('popup_is-opened');
  addCardForm.classList.toggle('popup_is-animated');
  closeCardForm.addEventListener('click', onClickCloseCardForm);
  document.addEventListener('keydown', handleEscClose);
};

function onClickCloseCardForm() {
  addCardForm.classList.remove('popup_is-opened');
  closeCardForm.removeEventListener('click', onClickCloseCardForm);
  document.removeEventListener('keydown', handleEscClose);
};


function openImageModal(clickEvent) {
  imagePopup.classList.add('popup_is-opened');
  imagePopup.classList.toggle('popup_is-animated');
  const currentCard = clickEvent.target.closest('.card');
  const cardTitle = currentCard.querySelector('.card__title');
  const cardImage = currentCard.querySelector('.card__image');
  imagePopupCaption.textContent = cardTitle.textContent;
  imagePopupContent.src = cardImage.src;
  closeImagePopup.addEventListener('click', onClickCloseImage);
  document.addEventListener('keydown', handleEscClose);
};

function onClickCloseImage() {
  imagePopup.classList.remove('popup_is-opened');
  closeImagePopup.removeEventListener('click', onClickCloseImage);
  document.removeEventListener('keydown', handleEscClose);
};

function handleEscClose(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest('.popup');
    closePopup(popup);
  }
};

overlays.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClose);
});

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
};


const clickProfileButton = document.querySelector('.profile__edit-button');
clickProfileButton.addEventListener('click', openProfileModal);

const clickCardButton = document.querySelector('.profile__add-button');
clickCardButton.addEventListener('click', openCardModal);

// Находим форму в DOM
//const formElement = editProfileForm; // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = editProfileForm.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = editProfileForm.querySelector('.popup__input_type_description'); // Воспользуйтесь инструментом .querySelector()

nameInput.value = document.querySelector('.profile__title').textContent;
jobInput.value = document.querySelector('.profile__description').textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;

    onClickCloseProfileForm(event);
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editProfileForm.addEventListener('submit', handleFormSubmit); 

// Находим поля формы в DOM
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');
const cardUrlInput = addCardForm.querySelector('.popup__input_type_url'); 

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleCardFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    let newCard = {name:cardNameInput.value, link:cardUrlInput.value};

    initialCards.unshift(newCard);
    const cardElement = createCard(newCard, onDeleteClick);
    //placesList.appendChild(cardElement);
    placesList.insertBefore(cardElement, placesList.firstChild);

    onClickCloseCardForm(event);
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
addCardForm.addEventListener('submit', handleCardFormSubmit); 


