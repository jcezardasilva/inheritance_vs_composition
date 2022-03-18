import {eat,breathe,swim,trick} from "./logic.mjs";

class NoviceMagician {
    constructor(){
        return Object.assign({},{eat,breathe,swim});
    }
}

class SuperMagician {
    constructor(){
        return Object.assign({},{eat,breathe,trick});
    }
}

const harry = new SuperMagician();

console.log("I am Harry")
harry.eat();
harry.breathe();
harry.trick();

console.log("-----------------");
const liv = new NoviceMagician();
console.log("I am Liv");
liv.eat();
liv.breathe();
liv.swim();