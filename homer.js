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

// SODA
let straw = String.fromCharCode(32, '&#160', 32, '&#160', 32, 47, 32);
let top = String.fromCharCode(46, 45, 47, 45, 46);
let middle = String.fromCharCode(124, 39, 45, 39, 124);
let middle2 = String.fromCharCode(124, 42, 42, 42, 124);
let middle3 = String.fromCharCode(124, 42, 42, 42, 124);
let bottom = String.fromCharCode(92, 95, 95, 95, 47);

let soda = [straw, top, middle, middle2, middle3, bottom];

console.log('Soda');
soda.forEach(el => console.log(el));

// ICE CREAM
let topIce = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  46,
  45,
  34,
  96,
  39,
  34,
  45,
  46
);
let firstBall = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  47,
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  92,
  32
);

let mid = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  124,
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  124,
  32
);

let mid2 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  47,
  39,
  126,
  126,
  126,
  39,
  126,
  126,
  96,
  92,
  32
);

let mid3 = String.fromCharCode(
  32,
  '&#160',
  124,
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  124,
  32
);

let mid4 = String.fromCharCode(
  32,
  '&#160',
  92,
  95,
  46,
  45,
  45,
  46,
  95,
  46,
  45,
  46,
  95,
  47
);

let cone1 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  92,
  61,
  95,
  61,
  95,
  61,
  95,
  47
);
let cone2 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  92,
  61,
  95,
  61,
  95,
  47
);

let cone3 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  92,
  61,
  95,
  47
);
let cone4 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  32,
  '&#160',
  92,
  47
);

let iceCream = [
  topIce,
  firstBall,
  mid,
  mid2,
  mid3,
  mid4,
  cone1,
  cone2,
  cone3,
  cone4
];

console.log('Icecream');
iceCream.forEach(e => console.log(e));

let beer1 = String.fromCharCode(32, '&#160', 95, 111, 79, 111, 79, 111);
let beer2 = String.fromCharCode(91, 95, 124, 124, 124, 124, 124);
let beer3 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  124,
  124,
  124,
  124,
  124
);
let beer4 = String.fromCharCode(
  32,
  '&#160',
  32,
  '&#160',
  126,
  126,
  126,
  126,
  126
);
let beer = [beer1, beer2, beer3, beer4];
console.log('Beer');
beer.forEach(e => console.log(e));


let space = String.fromCharCode(32,32);

let head1  = String.fromCharCode(32,32,32,32,95,95,95);
let head2  = String.fromCharCode(32,32,32,47,47,95,92,92,95);
let head3  = String.fromCharCode(32,46,34,92,92,32,32,32,32,34,46);
let head4  = String.fromCharCode(47,32,32,32,32,32,32,32,32,32,32,92);
let head5  = String.fromCharCode(124,32,32,32,32,32,32,32,32,32,32,32,92,95);
let head6  = String.fromCharCode(124,32,32,32,32,32,32,32,44,45,45,46,45,46,41);
let head7  = String.fromCharCode(32,92,32,32,32,32,32,47,32,32,111,32,92,111,92);
let head8  = String.fromCharCode(32,47,92,47,92,32,32,92,32,32,32,32,47,95,47);
let head9  = String.fromCharCode(32,32,40,95,46,32,32,32,96,45,45,39,95,95,41);
let head10 = String.fromCharCode(32,32,32,124,32,32,32,32,32,46,45,39,32,32,92);
let head11 = String.fromCharCode(32,32,32,124,32,32,46,45,39,32,32,32,32,32,41);
let head12 = String.fromCharCode(32,32,32,124,32,40,32,32,95,47,46,46,45,46,39);
let head13 = String.fromCharCode(32,32,32,124,32,32,96,46,95,95,95,46,39);
let head14 = String.fromCharCode(32,32,32,47,32,32,32,32,40);
let headHomer = [head1,head2,head3,head4,head5,head6,head7,head8,head9,head10,head11,head12,head13,head14]
console.log("head")
headHomer.forEach(e => console.log(e));
// ___ String.fromCharCode(32,32,32,32,95,95,95)..
// //_\\_ String.fromCharCode(32,32,32,47,47,95,92,92,95)..
// ."\\    ". String.fromCharCode(32,46,34,92,92,32,32,32,32,34,46)...
// /          \ String.fromCharCode(47,32,32,32,32,32,32,32,32,32,32,92)...
// |           \_String.fromCharCode(124,32,32,32,32,32,32,32,32,32,32,32,92,95)..
// |       ,--.-.)String.fromCharCode(124,32,32,32,32,32,32,32,44,45,45,46,45,46,41)..
// \     /  o \o\String.fromCharCode(92,32,32,32,32,32,47,32,32,111,32,92,111,92)..
// /\/\  \    /_/String.fromCharCode(32,47,92,47,92,32,32,92,32,32,32,32,47,95,47)..
// (_.   `--'__)String.fromCharCode(32,32,40,95,46,32,32,32,96,45,45,39,95,95,41)..
// |     .-'  \String.fromCharCode(32,32,32,124,32,32,32,32,32,46,45,39,32,32,92)..
// |  .-'.     )String.fromCharCode(32,32,32,124,32,32,46,45,39,32,32,32,32,32,41)..
// | (  _/--.-'String.fromCharCode(32,32,32,124,32,40,32,32,95,47,46,46,45,46,39)..
// |  `.___.'String.fromCharCode(32,32,32,124,32,32,96,46,95,95,95,46,39)..
// |    (String.fromCharCode(32,32,32,124,32,32,32,32,40)
 // console.log(headHomer);

function questionAnswer(question){
  console.log(question);
  
}

questionAnswer("this is the question")

// this is a function that takes an array of objects. 
// Each element of the array as an object that has a question.
// const arrQuestion = ["What is your name",
// "What do have any final words to say to Homer be fore he bursts",
// ""];
// const objAnswers = {};

