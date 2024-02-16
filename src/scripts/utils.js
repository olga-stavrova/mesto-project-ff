export function checkResponse(res) {
  //проверка ответа
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

//Функция отображения процесса загрузки "сохранение..."
export function loadingButtonText(buttonElement, textSaving) {
  const buttonText = buttonElement.textContent;
  buttonElement.textContent = textSaving;
  return buttonText;
}
