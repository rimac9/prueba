function sum(num1, num2) {
  return num1 + num2;
}

// callback puede ser cualquier nombre
// resibe dos valores numericos y una función
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 5, sum));

setTimeout(function () {
  console.log("hola Javascript");
}, 2000);

function greeting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000, "Rildo");

/* TABLA*/
/* function sum(num1, num2) {
  return num1 + num2;
}
function rest(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 5, mult)); */

console.log("primero");
console.log("segundo");

setTimeout()