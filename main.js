(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,r,o,n){var c=e.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image");return i.src=t.link,i.alt=t.name,c.querySelector(".card__title").textContent=t.name,i.addEventListener("click",n),c.querySelector(".card__delete-button").addEventListener("click",r),c.querySelector(".card__like-button").addEventListener("click",o),c}function r(e){e.target.closest(".card").remove()}function o(e){e.target.classList.toggle("card__like-button_is-active")}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function a(e){e.target===e.currentTarget&&c(e.target.closest(".popup"))}var s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},u=function(e,t){t.validity.patternMismatch?t.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы."):t.setCustomValidity(""),t.validity.valid?function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(s.inputErrorClass),r.classList.remove(s.errorClass),r.textContent=""}(e,t):function(e,t,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(s.inputErrorClass),o.textContent=r,o.classList.add(s.errorClass)}(e,t,t.validationMessage)};function l(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))}function p(e,t){e.querySelectorAll("."+t.errorClass).forEach((function(e){e.textContent="",e.classList.remove(t.errorClass)})),Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(e){e.classList.remove(t.inputErrorClass)}));var r=e.querySelector(t.submitButtonSelector);r.disabled=!0,r.classList.add(t.inactiveButtonClass)}var d=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var n=t(e,r,o,C);d.appendChild(n)}));var _=document.querySelector(".popup_type_edit"),m=_.querySelector(".popup__close");_.classList.add("popup_is-animated"),m.addEventListener("click",(function(){c(_)}));var v=document.querySelector(".popup_type_new-card"),y=v.querySelector(".popup__close");v.classList.add("popup_is-animated"),y.addEventListener("click",(function(){c(v),v.querySelector(".popup__form").reset()}));var f=document.querySelectorAll(".popup"),S=document.querySelector(".popup_type_image"),q=S.querySelector(".popup__close");S.classList.add("popup_is-animated"),q.addEventListener("click",(function(){c(S)}));var k=S.querySelector(".popup__image"),L=S.querySelector(".popup__caption");function C(e){n(S);var t=e.target;L.textContent=t.alt,k.src=t.src,k.alt=t.alt}f.forEach((function(e){e.addEventListener("click",a)})),document.querySelector(".profile__edit-button").addEventListener("click",(function(){n(_),p(_,s),E.value=document.querySelector(".profile__title").textContent,b.value=document.querySelector(".profile__description").textContent})),document.querySelector(".profile__add-button").addEventListener("click",(function(){n(v),p(v,s)}));var E=_.querySelector(".popup__input_type_name"),b=_.querySelector(".popup__input_type_description");!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);l(r,o,t),r.forEach((function(n){n.addEventListener("input",(function(){u(e,n),l(r,o,t)}))}))}(t,e)}))}(s),_.addEventListener("submit",(function(e){e.preventDefault(),document.querySelector(".profile__title").textContent=E.value,document.querySelector(".profile__description").textContent=b.value,c(_)}));var g=v.querySelector(".popup__input_type_card-name"),h=v.querySelector(".popup__input_type_url");v.addEventListener("submit",(function(e){e.preventDefault();var n=t({name:g.value,link:h.value},r,o,C);d.insertBefore(n,d.firstChild),c(v),v.querySelector(".popup__form").reset()}))})();