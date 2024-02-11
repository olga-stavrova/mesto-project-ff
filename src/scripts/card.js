import {
  deleteCardData,
  likeCardData,
  dislikeCardData,
} from "../scripts/api.js";

//Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

//Функция создания карточки
export function createCard(
  cardData,
  userData,
  deleteCardFunction,
  likeCardFunction,
  openImageModal
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.id = cardData._id;

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.addEventListener("click", openImageModal);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (cardData.owner._id === userData._id) {
    deleteButton.addEventListener("click", deleteCardFunction);
  } else {
    deleteButton.style.visibility = "hidden";
  }

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCardFunction);

  //отображаем количество лайков при загрузке страницы
  cardElement.querySelector(".likes_counter").textContent =
    cardData.likes.length;
  cardData.likes.forEach((ownerData) => {
    if (ownerData._id === userData._id) {
      likeButton.classList.add("card__like-button_is-active");
    }
  });

  return cardElement;
}

//Функция удаления карточки
export function handleDeleteClick(clickEvent) {
  const listItem = clickEvent.target.closest(".card");
  listItem.remove();
  deleteCardData(listItem.id);
}

//функция лайка карточки
export function handleLikeClick(clickEvent) {
  const likeButton = clickEvent.target;
  likeButton.classList.toggle("card__like-button_is-active");
  const cardElement = clickEvent.target.closest(".card");
  if (likeButton.classList.contains("card__like-button_is-active")) {
    likeCardData(cardElement.id);
    cardElement.querySelector(".likes_counter").textContent++;
  } else {
    dislikeCardData(cardElement.id);
    cardElement.querySelector(".likes_counter").textContent--;
  }
}
