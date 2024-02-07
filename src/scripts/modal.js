export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  //modal.classList.toggle("popup_is-animated");
  //modal.classList.add("popup_is-animated");
  document.addEventListener("keydown", handleEscClose);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  //modal.classList.remove("popup_is-animated");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

export function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest(".popup");
    closeModal(popup);
  }
}
