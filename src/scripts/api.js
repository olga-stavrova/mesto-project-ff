const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
    headers: {
      authorization: '8aaa1ad9-6ed1-4bcb-bc32-b56ed203ae01',
      'Content-Type': 'application/json'
    }
  };

export function getAPIData() {
    const result = {cardsData: [], userData: []};
    return Promise.all([
      fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
      }),
      fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
      }),
    ])
      .then(async ([cards, user]) => {
      result.cardsData = await cards.json();
      //renderCards(result.cardsData);
      result.userData = await user.json();
      return result;
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
export function patchProfileData(nameData, aboutData){
    fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameData,
      about: aboutData
    })
  });
  }
  
  export function addCardData(nameData, linkData){
    return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameData,
      link: linkData
    })
  })
  .then(res => {
    //if (res.ok) {
      //let result = res.json();
      //console.log('addCardData:'+result);
      return res.json();
    //}
  })    
  .catch((err) => {
    console.log(err);
    return undefined;
  })
  };

  export function deleteCardData(cardDataId){
    fetch(`${config.baseUrl}/cards/${cardDataId}`, {
    method: 'DELETE',
    headers: config.headers
  });
  };
  
  export function likeCardData(cardId){
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(res => {
    //if (res.ok) {
      //let result = res.json();
      //console.log('addCardData:'+result);
      return res.json();
    //}
  })    
  .catch((err) => {
    console.log(err);
    return undefined;
  })
  };

  export function dislikeCardData(cardId){
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => {
    //if (res.ok) {
      //let result = res.json();
      //console.log('addCardData:'+result);
      return res.json();
    //}
  })    
  .catch((err) => {
    console.log(err);
    return undefined;
  })
  };

  export function changeAvatarCardData(avatarData){
    return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarData
    })
  })
  .then(res => {
    //if (res.ok) {
      //let result = res.json();
      //console.log('addCardData:'+result);
      return res.json();
    //}
  })    
  .catch((err) => {
    console.log(err);
    return undefined;
  })
  };
  /*
  function getInitialCards() {
    fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };
  */