import {builder} from "./core.mjs";

class Magician {
    constructor(){
        console.log('before',this)
        builder(this)
            .addEat()
            .addBreath()
            .addSwim()
            .addTrick();
        console.log('after',this)
    }
}

const harry = new Magician();

console.log("I am Harry")
harry.eat();
harry.breathe();
harry.trick();
harry.swim();