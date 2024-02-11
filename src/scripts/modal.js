import { validationConfig } from "../scripts/validation.js";

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
    openedPopup.querySelector(validationConfig.formSelector).reset();
  }
}

export function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest(".popup");
    closeModal(popup);
    popup.querySelector(validationConfig.formSelector).reset();
  }
}
