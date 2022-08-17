const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
// llamado api
const API = 'https://api.escuelajs.co/api/v1';

// Funcion principal q obtendrá la informaión como objeto, peticiones
function fetchData(urlApi, callback) {
  // Inicializar un objeto de tipo XMLHttpRequest
  let xhttp = new XMLHttpRequest();

  // El metodo .open realiza la petición de apertura de comunicación,
  // el metodo puede ser 'GET' O 'POST'..
  // Luego se enviá la URL
  xhttp.open("GET", urlApi, true); // true para avilitar
  xhttp.onreadystatechange = function (event) {
    // El objeto readyState define el estado del objeto XMLHttpRequest
    /* 
        0 no inicializado
        1 Loading
        2 Ejecutado
        3 Interactuando
        4 Completado
        */
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        // validar valor y tipo 200
        callback(null, JSON.parse(xhttp.responseText));
        //
      }else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    } 
  }

  xhttp.send(); //enviamos el llamado de solicitud 
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);

  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // se invoca nuevamente la funcion fetchData con el fin de acceder a un objeto puntual del erreglo data1, se envia como parametro la url de la api
    if (error2) return console.error(error2);

    fetchData(`${API}/categories/${data2?.category?.id}`,function (error3, data3) {
        if (error3) return console.error(error3);
        // se valida si existe error, en caso deq existe se detiene el proceso y se imprime 
        console.log(data1[0]); // imprime el objeto de la posicion 1
        console.log(data2.title);
        console.log(data3.name);
      
      });
  });
});
