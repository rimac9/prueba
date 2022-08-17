const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async resolved!......3......'), 2000)
            : reject(new Error('Error!'));
    });
}
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello ......4....');
}
                        
console.log('Before....1..');
anotherFn();
console.log('After........2..');
/* 
Antes de llamar anotherFn        before  
Ya la llamamos, ahora llamaremos fnAsync y esperaremos a que se resuelva        after 
Holaaa, me llamaron y no tengo que esperar a que termine el proceso asincrono    Async 
Async resolved!
Listo, ya se resolvió el proceso asincrono         resolved! hello
*/