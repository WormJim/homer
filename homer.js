const food = {
  1: {
    // add level one foods
    donut: 1,
    guitar: 2,
    cello: 5
  },
  2: {
    beer: 10
  },
  3: {
    // add level three foods
    car: 15
  },
  4: {
    // add level four foods
    marge: 60,
    boat: 30
  }
};


SODA
let straw = String.fromCharCode(32,'&#160',32,'&#160',32,47,32);
let top = String.fromCharCode(46,45,47,45,46);
let middle = String.fromCharCode(124,39, 45, 39,124);
let middle2 = String.fromCharCode(124, 42, 42, 42, 124);
let middle3 =  String.fromCharCode(124, 42,42, 42, 124);
let bottom = String.fromCharCode(92,95,95,95,47);

let soda = [straw,top,middle,middle2, middle3, bottom];

console.log("Soda");
soda.forEach((el) =>console.log(el));




ICE CREAM
let topIce = String.fromCharCode(32,'&#160',32,'&#160',32,'&#160',46,45,34,96,39,34,45,46);
let firstBall =String.fromCharCode(32,'&#160',32,'&#160',47,32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',92,32);

let mid = String.fromCharCode(32,'&#160',32,'&#160',124,32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',124,32);

let mid2 = String.fromCharCode(32,'&#160', 32,'&#160',47,39,126,126,126,39,126,126,96,92,32)

let mid3 =  String.fromCharCode(32,'&#160',124,32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',124,32);

let mid4 =  String.fromCharCode(32,'&#160',92,95,46,45,45,46,95,46,45,46,95,47);

let cone1 = String.fromCharCode(32,'&#160',32,'&#160',32,'&#160',92,61,95,61,95,61,95,47);
let cone2 = String.fromCharCode(32,'&#160',32,'&#160',32,'&#160',32,'&#160',92,61,95,61,95,47);

let cone3= String.fromCharCode(32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',92,61,95,47);
let cone4 = String.fromCharCode(32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',32,'&#160',92,47);

let iceCream = [topIce, firstBall, mid, mid2, mid3, mid4, cone1, cone2, cone3, cone4];

console.log("Icecream")
iceCream.forEach((e)=> console.log(e));


let beer1 = String.fromCharCode(32,'&#160',95,111, 79,111,79,111);
let beer2 = String.fromCharCode(91,95, 124, 124,124,124,124);
let beer3 = String.fromCharCode(32,'&#160',32,'&#160', 124,124,124,124,124);
let beer4 = String.fromCharCode(32,'&#160',32,'&#160',126,126,126,126,126);
let beer = [beer1,beer2,beer3,beer4];
console.log("Beer")
beer.forEach((e)=>console.log(e));


