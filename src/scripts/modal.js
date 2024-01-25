export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  modal.classList.toggle("popup_is-animated");
  modal
    .querySelector(".popup__close")
    .addEventListener("click", () => closeModal(modal));
  document.addEventListener("keydown", (event) => handleEscClose(event, modal));
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  modal.classList.remove("popup_is-animated");
  modal
    .querySelector(".popup__close")
    .removeEventListener("click", () => closeModal(modal));
  document.removeEventListener("keydown", (event) =>
    handleEscClose(event, modal)
  );
}

export function handleEscClose(event, modal) {
  if (event.key === "Escape") {
    closeModal(modal);
  }
}

export function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const popup = event.target.closest(".popup");
    closePopup(popup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}
