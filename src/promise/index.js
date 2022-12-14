/* Promesa 3 estados
pendiente
cumplido
rechazado */

const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("there are no cows on the farm");
  }
});
// &nbsp;  salto de line platzi  
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log("finally"));