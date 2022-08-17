function* gen(){
    yield 1;   // steps
    yield 2;
    yield 3;
};

const g = gen();  // next, value --- palabra reservada
console.log(g.next().value); // 1 
console.log(g.next().value); //2
console.log(g.next().value); // 3

function* iterate (array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);