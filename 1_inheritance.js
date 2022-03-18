class Person  {
    eat() {
        console.log('I am eating');
    }
    breathe(){
        console.log('I am breathing');
    }    
    swim(){
        console.log('I am swimming');
    } 
}class Magician  extends Person{
    trick() {
        console.log('I am doing a trick');
    }
}
let liv= new Magician();
let harry = new Magician();

//Liv can:
console.log("i am Liv");
liv.eat();
liv.breathe();
liv.swim();
liv.trick();

console.log("---------");
//Harry can:
console.log("i am Harry");
harry.eat();
harry.breathe();
harry.swim();
harry.trick();