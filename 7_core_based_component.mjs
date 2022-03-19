import {init} from "./core.mjs";

class Magician {
    constructor(){
        console.log('before',this)
        init(this);
        console.log('after',this)
    }
}



const harry = new Magician();

console.log("I am Harry")
harry.eat();
harry.breathe();
harry.trick();

console.log("-----------------");

const liv = new Magician();
console.log("I am Liv");
liv.eat();
liv.breathe();
liv.swim();