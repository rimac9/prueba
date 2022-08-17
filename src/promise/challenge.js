import fetch from 'node-fetch';
const API = 'http://api.escuelajs.co/api/v1'

//función que va a recibir como argumento la url
function fetchData(urlApi){
    return fetch(urlApi)
};
/*
// Es llamado
fetchData(`${API}/products`)           // transformamos l url a /products
    .then(response => response.json()) // que hay en su respuesta ** json transformar la informacion del primer llamado products
    .then(products => {
        console.log(products); // mostramos los productos
  // Se pueden anidar multiples then
    }) 
    .then(() => {
        console.log('Hola');
    })
    .catch(error => console.log(error)); */

    fetchData (`${API}/products`)
        .then(response => response.json())
        .then(products => {
            console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
        })
        .then(response => response.json())
        .then(product => {
            console.log(product.title);
            return fetchData(`${API}/categories/${product.category.id}`)
        })
        .then(response => response.json())
        .then(category => {
            console.log(category.name);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('finally'));