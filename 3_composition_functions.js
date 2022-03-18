function eat() {
    console.log('I am eating');
}
function breathe() {
    console.log('I am breathing');
}
function swim() {
    console.log('I am swimming');
}
function trick() {
    console.log('I am doing a trick');
}
const superMagician = () => {
    return Object.assign({},
        {eat,breathe,trick}
    );
}
const noviceMagician = () => {
    return Object.assign({},
        {eat,
        breathe,
        swim}
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