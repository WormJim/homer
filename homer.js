// // SODA
// let straw = String.fromCharCode(32, '&#160', 32, '&#160', 32, 47, 32);
// let top = String.fromCharCode(46, 45, 47, 45, 46);
// let middle = String.fromCharCode(124, 39, 45, 39, 124);
// let middle2 = String.fromCharCode(124, 42, 42, 42, 124);
// let middle3 = String.fromCharCode(124, 42, 42, 42, 124);
// let bottom = String.fromCharCode(92, 95, 95, 95, 47);

// let soda = [straw, top, middle, middle2, middle3, bottom];

// console.log('Soda');
// soda.forEach(el => console.log(el));

// // ICE CREAM
// let topIce = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   46,
//   45,
//   34,
//   96,
//   39,
//   34,
//   45,
//   46
// );
// let firstBall = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   47,
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   92,
//   32
// );

// let mid = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   124,
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   124,
//   32
// );

// let mid2 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   47,
//   39,
//   126,
//   126,
//   126,
//   39,
//   126,
//   126,
//   96,
//   92,
//   32
// );

// let mid3 = String.fromCharCode(
//   32,
//   '&#160',
//   124,
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   124,
//   32
// );

// let mid4 = String.fromCharCode(
//   32,
//   '&#160',
//   92,
//   95,
//   46,
//   45,
//   45,
//   46,
//   95,
//   46,
//   45,
//   46,
//   95,
//   47
// );

// let cone1 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   92,
//   61,
//   95,
//   61,
//   95,
//   61,
//   95,
//   47
// );
// let cone2 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   92,
//   61,
//   95,
//   61,
//   95,
//   47
// );

// let cone3 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   92,
//   61,
//   95,
//   47
// );
// let cone4 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   32,
//   '&#160',
//   92,
//   47
// );

// let iceCream = [
//   topIce,
//   firstBall,
//   mid,
//   mid2,
//   mid3,
//   mid4,
//   cone1,
//   cone2,
//   cone3,
//   cone4
// ];

// console.log('Icecream');
// iceCream.forEach(e => console.log(e));

// let beer1 = String.fromCharCode(32, '&#160', 95, 111, 79, 111, 79, 111);
// let beer2 = String.fromCharCode(91, 95, 124, 124, 124, 124, 124);
// let beer3 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   124,
//   124,
//   124,
//   124,
//   124
// );
// let beer4 = String.fromCharCode(
//   32,
//   '&#160',
//   32,
//   '&#160',
//   126,
//   126,
//   126,
//   126,
//   126
// );
// let beer = [beer1, beer2, beer3, beer4];
// console.log('Beer');
// beer.forEach(e => console.log(e));

const foodLevels = [
  {
    donut: 10,
    soda: 10,
    fries: 15,
    burger: 25,
    cowboy_burger: 35,
    pizza: 20,
    beer: 15,
    ice_cream: 15
  },
  {
    guitar: 25,
    cello: 30,
    piano: 40,
    computer: 25,
    desk: 35,
    drums: 40,
    chair: 25,
    tree: 40
  },
  {
    car: 40,
    boat: 60,
    plane: 70,
    truck: 60,
    motorcycle: 30,
    train: 70,
    plutonium: 90,
    bees: 60
  },
  {
    marge: 80,
    bart: 70,
    lisa: 55,
    maggie: 100,
    krusty_the_clown: 80,
    apu: 70,
    ned_flanders: 90,
    mr_burns: 60,
    santas_little_helper: 80
  }
];

function intro() {
  const string =
    'Welcome to Happy, Happy Homer.\n' +
    "A fun game Homer from the Simpsons can't stop eating\n" +
    'Feed him everything you can to satisfy his craving.';
  alert(string);
}

function setPlayer() {
  alert("Let's get started");
  let player = prompt('What is your name?');
  alert(`Hello ${player}!`);
  return player;
}

function gameRules(player) {
  alert(`${player}, let's go over the game play`);
  let gamePlayString =
    'The objective is to feed Homer a variety of items.\n' +
    "If he doesn't explode, you advance to the next level.\n" +
    'Beware though, Homer might randomly explode\n' +
    "Try not to feed him too fast or you'll be coverd in everything he ate.";

  alert(gamePlayString);
}

function gameOver() {}

function levelUp() {}

function setHomer(lvl) {
  alert(
    `Level ${lvl}\nHomer has ${lvl *
      100} points\nDrop that down to zero to advance to the next level.`
  );
  return lvl * 100;
}

function feedHomer(food) {}

(function initGame() {
  intro();
  let player = setPlayer();
  gameRules(player);
  let homer = setHomer(1);
  feedHomer(food);
})();
