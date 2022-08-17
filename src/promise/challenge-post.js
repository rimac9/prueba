import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors', //  permite el acceso de origen cruzado, que desea optaar
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json' //necesario indicar loq se esta enviando
    },
    body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSO
  });
  return response;
}

// estrucructura segun documemtanción Fake API
const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}
//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));