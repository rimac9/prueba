/* Ejecuta un callback con 2s de demora */

/* Guia:
Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

*/
 function execCallback(callback) {
     window.setTimeout(() => { //revisar window
     callback()
    }, 2000)
  }


 // Input:
const myFunc = () => console.log('Log after 2s')
let a  = execCallback(myFunc);
console.log(a);
// Output:
// Execute myFunc 2s after