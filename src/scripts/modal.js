//import { validationConfig } from "../scripts/validation.js";

const popupOpenedClass = "popup_is-opened";

export function openModal(modal) {
  modal.classList.add(popupOpenedClass);
  document.addEventListener("keydown", handleEscClose);
}

export function closeModal(modal) {
  modal.classList.remove(popupOpenedClass);
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector("." + popupOpenedClass);
    closeModal(openedPopup);
    //resetForm(openedPopup); //исключено по требованию ревьюера
  }
}

export function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest(".popup");
    closeModal(popup);
    //resetForm(popup); //исключено по требованию ревьюера
  }
}

/*
function resetForm(popupElement){
  const popupForm = popupElement.querySelector(validationConfig.formSelector);
  if(popupForm!==null){
    popupForm.reset();
  }
}
*/
