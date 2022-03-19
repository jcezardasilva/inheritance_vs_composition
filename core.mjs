export function eat() {
    console.log('I am eating');
}
export function breathe() {
    console.log('I am breathing');
}
export function swim() {
    console.log('I am swimming');
}
export function trick() {
    console.log('I am doing a trick');
}
export function init(that){
    return Object.assign(that,{eat,breathe,swim,trick});
}

export default {init,eat,breathe,swim,trick};