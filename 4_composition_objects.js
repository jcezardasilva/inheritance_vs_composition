const eat = {
    eat: function(){
        console.log('I am eating');
    }
}
const breathe = {
    breathe: function(){
        console.log('I am breathing');
    }
}
const swim = {
    swim: function(){
        console.log('I am swimming');
    }
}
const trick = {
    trick: function(){
        console.log('I am doing a trick');
    }
}
const superMagician = () => {
    return Object.assign({},
        eat,
        breathe,
        trick
    );
}
const noviceMagician = () => {
    return Object.assign({},
        eat,
        breathe,
        swim
    );
}

let harry = superMagician();
console.log("I am Harry")
harry.eat();
harry.breathe();
harry.trick();

console.log("-----------")

let liv = noviceMagician();
console.log("I am Liv")
liv.eat();
liv.breathe();
liv.swim();