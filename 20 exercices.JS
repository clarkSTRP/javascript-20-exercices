/*exercice 1*/
let a = 1;
let b = 2;

a = 2;
b = 1;

console.log(a);
console.log(b); 
/*exercice 2*/
let nom = 'toto';
let age = 30;
let homme = true;
console.log(nom,age,homme)
/*exercice 3*/
let number1 = 2;
let number2 = 3;
console.log(number1+number2);
/*exercice 4*/
let minute = 4;
let second = minute*60;
console.log(second)
/*exercice 4*/
let number = 2;
number++;
console.log(number)
/*exercice 5*/
let width = 100;
let height = 100;
let surface = (width*height)/2;
console.log(surface)
/*exercice 6*/
let string = "Helllo";
let stringsplit = string.split("");
let stringrev = stringsplit.reverse();
console.log(stringrev);
/*exercice 7*/
function thebigone(a,b,c) {
    let bigger = a;
        if(b > bigger) {
            bigger = b;
        }
        if (c > bigger) {
            bigger = c;
        }
  return bigger;
}
console.log(thebigone(1,6,3))
/*exercice 8*/
function getFirst(array) {
    return array[0];
}
console.log(getFirst([17,2,3,6,5,1,8,6]))
/*exercice 9*/
let url = window.location.href;
console.log(url);
/*exercice 10*/
function resteDiv (a,b){
    return a % b;
}
console.log(resteDiv(5,2))
/*exercice 11*/
function over9000(a,b){
    return a + b < 100 ;
}
console.log(over9000(100,200))
/*exercice 12*/
function hourtosecond(a){
    return (a * 60) * 60;
}
console.log(hourtosecond(2))
/*exercice 13*/
function checkNBR(x){
    return x <= 0;
}
console.log(checkNBR(-3))
/*exercice 14*/
function isEqual(a,b){
    return a === b ;
}
console.log(isEqual(0,0))
/*exercice 15*/
function isDivisible(x){
    return x % 5 === 0;
}
console.log(isDivisible(10))
/*exercice 16*/
function hmTos(a,b){
    return (a * 60 * 60)+(b * 60);
}
console.log (hmTos(1,10))
/*exercice 17*/
function reverse(array){
    var output = [];
    for (var i = array.length; i > 0; i--){
        output.push(array.pop());
    }
    return output;
}

console.log(reverse([1,2,3,4,5,6,7]));
/*exercice 18*/
function getLast(array) {
    if (array.length === 0) {
    return undefined
    }
    return array[array.length - 1];
}
console.log(getLast([17,2,3,7,5,1,8,6]))
/*exercice 19*/
function isEqual(a,b){
    return a === b ;
}
console.log(isEqual(0,0))
/*exercice 20*/
function isEmpty(str){
    return (str.length === 0)
}
console.log(isEmpty(''))
