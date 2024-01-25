//Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

//Функция создания карточки
export function createCard(cardData, deleteCardFunction, likeCardFunction, openImageModal) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.querySelector(".card__title").textContent = cardData.name;
    cardImage.addEventListener("click", openImageModal);
  
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", deleteCardFunction);
  
    const likeButton = cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", likeCardFunction);
    return cardElement;
  }
  
  //Функция удаления карточки
  export function handleDeleteClick(clickEvent) {
    const listItem = clickEvent.target.closest(".card");
    listItem.remove();
  }
  
  //функция лайка карточки
  export function handleLikeClick(clickEvent) {
    clickEvent.target.classList.toggle("card__like-button_is-active");
  }

 
  