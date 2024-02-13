//
import { checkResponse } from "../scripts/utils.js";

//Базовая конфигурация запросов к серверу
const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-6",
  headers: {
    authorization: "8aaa1ad9-6ed1-4bcb-bc32-b56ed203ae01",
    "Content-Type": "application/json",
  },
};

//Функция получения данных о пользователе и карточках с сервера/backend
export function getAPIData() {
  const result = { cardsData: [], userData: [] };
  return Promise.all([
    fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }),
    fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }),
  ]).then(async ([cards, user]) => {
    result.cardsData = await cards.json();
    result.userData = await user.json();
    return result;
  });
}

//Функция изменения данных профиля пользователя на сервере
export function patchProfileData(nameData, aboutData) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameData,
      about: aboutData,
    }),
  }).then(checkResponse);
}

//Функция добавления карточки на сервере
export function addCardData(nameData, linkData) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: nameData,
      link: linkData,
    }),
  }).then(checkResponse);
}

//Функция удаления карточки с сервера
export function deleteCardData(cardDataId) {
  return fetch(`${config.baseUrl}/cards/${cardDataId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция добавления лайка карточки с сохранением на сервере
export function likeCardData(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция снятия лайка карточки с сохранением на сервере
export function dislikeCardData(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция изменения изображения аватара
export function changeAvatarData(avatarData) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarData,
    }),
  }).then(checkResponse);
}
