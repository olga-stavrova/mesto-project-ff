import '../pages/index.css';
import { initialCards } from '../scripts/cards.js';
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


//открытие модального окна формы
const editProfileForm = document.querySelector('.popup_type_edit');
const closeModal = editProfileForm.querySelector('.popup__close');
const addCardForm = document.querySelector('.popup_type_new-card');
const clickClosedButton = addCardForm.querySelector('.popup__close');
const overlays = document.querySelectorAll('.popup');

/*
const onClickCloseEditForm = (clickEvent) => {
  //const modalForm = clickEvent.target.closest(".popup_type_edit");
  editProfileForm.classList.remove('popup_is-opened');
};
*/
function onClickCloseEditForm(clickEvent) {
  //const modalForm = clickEvent.target.closest(".popup_type_edit");
  editProfileForm.classList.remove('popup_is-opened');
  closeModal.removeEventListener('click', onClickCloseEditForm);
  document.removeEventListener('keydown', handleEscClose);
};

function onClickCloseCardForm(clickEvent) {
 // const modalForm = clickEvent.target.closest(".popup_type_new-card");
  addCardForm.classList.remove('popup_is-opened');
  clickClosedButton.removeEventListener('click', onClickCloseCardForm);
  document.removeEventListener('keydown', handleEscClose);
};

function handleEscClose(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

function openProfileModal() {
editProfileForm.classList.add('popup_is-opened');
closeModal.addEventListener('click', onClickCloseEditForm);
document.addEventListener('keydown', handleEscClose);
}

function openCardModal() {
addCardForm.classList.add('popup_is-opened');
clickClosedButton.addEventListener('click', onClickCloseCardForm);
document.addEventListener('keydown', handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}


function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest('.popup');
    closePopup(popup);
  }
}

overlays.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClose);
});


let clickProfileButton = document.querySelector('.profile__edit-button');
clickProfileButton.addEventListener('click', openProfileModal);

let clickCardButton = document.querySelector('.profile__add-button');
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
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;

    onClickCloseEditForm(evt);
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editProfileForm.addEventListener('submit', handleFormSubmit); 

// Находим поля формы в DOM
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');
const cardUrlInput = addCardForm.querySelector('.popup__input_type_url'); 

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleCardFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    let newCard = {name:cardNameInput.value, link:cardUrlInput.value};

    initialCards.unshift(newCard);
    const cardElement = createCard(newCard, onDeleteClick);
    //placesList.appendChild(cardElement);
    placesList.insertBefore(cardElement, placesList.firstChild);

    onClickCloseCardForm(evt);
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
addCardForm.addEventListener('submit', handleCardFormSubmit); 
