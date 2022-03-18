import {eat,breathe,swim,trick} from "./logic.mjs";

class Magician {
    constructor(props){
        Object.assign(this,props);
    }
}

const harry = new Magician({eat,breathe,trick});

console.log("I am Harry")
harry.eat();
harry.breathe();
harry.trick();

console.log("-----------------");

const liv = new Magician({eat,breathe,swim});
console.log("I am Liv");
liv.eat();
liv.breathe();
liv.swim();