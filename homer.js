let readline;
let rl;

function readLineFunc() {
  readline = require('readline');
  rl = readline.createInterface(process.stdin, process.stdout);
}

let space = String.fromCharCode(32, 32);
let row = '';
let str = '';

let head1 = String.fromCharCode(32, 32, 32, 32, 95, 95, 95);
let head2 = String.fromCharCode(32, 32, 32, 47, 47, 95, 92, 92, 95);
let head3 = String.fromCharCode(32, 46, 34, 92, 92, 32, 32, 32, 32, 34, 46);
let head4 = String.fromCharCode(47, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 92);
let head5 = String.fromCharCode(
  124,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  92,
  95
);
let head6 = String.fromCharCode(
  124,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  44,
  45,
  45,
  46,
  45,
  46,
  41
);
let head7 = String.fromCharCode(
  32,
  92,
  32,
  32,
  32,
  32,
  32,
  47,
  32,
  32,
  111,
  32,
  92,
  111,
  92
);
let head8 = String.fromCharCode(
  32,
  47,
  92,
  47,
  92,
  32,
  32,
  92,
  32,
  32,
  32,
  32,
  47,
  95,
  47
);
let head9 = String.fromCharCode(
  32,
  32,
  40,
  95,
  46,
  32,
  32,
  32,
  96,
  45,
  45,
  39,
  95,
  95,
  41
);
let head10 = String.fromCharCode(
  32,
  32,
  32,
  124,
  32,
  32,
  32,
  32,
  32,
  46,
  45,
  39,
  32,
  32,
  92
);
let head11 = String.fromCharCode(
  32,
  32,
  32,
  124,
  32,
  32,
  46,
  45,
  39,
  32,
  32,
  32,
  32,
  32,
  41
);
let head12 = String.fromCharCode(
  32,
  32,
  32,
  124,
  32,
  40,
  32,
  32,
  95,
  47,
  46,
  46,
  45,
  46,
  39
);
let head13 = String.fromCharCode(
  32,
  32,
  32,
  124,
  32,
  32,
  96,
  46,
  95,
  95,
  95,
  46,
  39
);
let head14 = String.fromCharCode(32, 32, 95, 47, 32, 32, 32, 32, 40);
let head15 = String.fromCharCode(32, 47, 32, 32, 32, 32, 32, 32, 92, 92);

let homersHead = [
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
  head7,
  head8,
  head9,
  head10,
  head11,
  head12,
  head13,
  head14,
  head15
];
// console.log("head")

// This function moves homer a cross the screen.
function moveHomer(n, cb) {
  //n is the pause setTimeout in milliseconds between each loop
  for (let i = 0; i < homersHead.length; i++) {
    (function(i) {
      setTimeout(function() {
        str = str.concat(space); //build string to add to Homer
        console.clear();
        homersHead.forEach(ele => {
          //loop over homersHead
          row = '';
          row = row.concat(str, ele);
          console.log(row);
        });
        if (i === homersHead.length - 1) {
          console.log('Ready to start the our game!!');
          setTimeout(() => cb(), n * 10);
        }
      }, i * n);
    })(i);
  }
}

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
let consoleBrowser = ''; //flag to know where we are operating, 'B' for Browser, 'T' for terminal

const foodLevels = [
  {
    donut: 75,
    soda: 10,
    fries: 15,
    burger: 75,
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
// **** TERMINAL FUNCTIONS **** //
function introT() {
  const string =
    '\nWelcome to Happy, Happy Homer.\n' +
    "A fun game Homer from the Simpsons can't stop eating\n" +
    'Feed him everything you can to satisfy his craving.\n';
  console.log(string);
}

function gameRulesT(player) {
  console.log(`${player}, let's go over the game play`);
  let gamePlayString =
    'The objective is to feed Homer a variety of items.\n' +
    "If he doesn't explode, you advance to the next level.\n" +
    'Beware though, Homer might randomly explode\n' +
    "Try not to feed him too fast or you'll be coverd in everything he ate.";

  console.log(gamePlayString);
}

function setHomerT(lvl) {
  console.log(
    `Level ${lvl}\nHomer has ${lvl *
      100} points\nDrop that down to zero to advance to the next level.`
  );
  return lvl * 100;
}

// **** ^ TERMINAL FUNCTIONS **** //
function gameOver() {}

function levelUpTerminal(lvl) {
  console.log('In Level Up');
  return lvl++;
}

function setHomerTerminal(lvl) {
  return lvl * 100;
}

// function checkProp(string) {
//   console.log(foodLevels.hasOwnProperty(string));
//   if (!foodLevels.hasOwnProperty(string)) return false;
//   return string;
// }

function homerMustEat(answer, food, bellySize, levelFood) {
  if (!levelFood.hasOwnProperty(answer)) {
    rl.setPrompt(`\nImproper argument, please choose again:\n${levelFood} > `);
    rl.prompt();
  } else {
    bellySize -= food[lvl - 1][answer];
    if (bellySize < 25) {
      rl.setPrompt(
        `\nHomer is almost full, choose something else:\n ${levelFood} > `
      );
      rl.prompt();
    } else {
      rl.setPrompt(
        `\nHomer is still hungry, see what else he can eat:\n${levelFood} > `
      );
      rl.prompt();
    }
  }
}

function feedHomerTerminal(food, lvl) {
  let bellySize = setHomerTerminal(lvl);
  let levelFood = Object.keys(food[lvl - 1]);

  rl.question(`\nFeed Homer:\n ${levelFood}? > `, answer => {
    homerMustEat(answer, food, bellySize, levelFood);
    rl.on('line', answer => {
      if (answer === 'exit') {
        rl.close();
      }
      homerMustEat(answer, food, bellySize, levelFood);
      // bellySize -= food[lvl - 1][answer];

      // if (bellySize <= 0) {
      //   rl.close();
      // } else if (bellySize <= 25) {
      //   rl.setPrompt(
      //     `Homer is almost full, choose something else and hope he doesn't explode:\n ${levelFood} > `
      //   );
      //   rl.prompt();
      // } else {
      //   rl.prompt();
      // }
    });

    // rl.on('close', () => {
    //   console.log('Closed');
    //   feedHomerTerminal(food, levelUpTerminal(lvl));
    // });
  });
}

// #########################
// ## BROWESER CODE BELOW ##
// #########################

function introB() {
  const string =
    'Welcome to Happy, Happy Homer.\n' +
    "A fun game. Here, Homer from the Simpsons just can't stop eating!\n" +
    'Feed him everything you can to satisfy his craving.';
  alert(string);
}

function gameRulesB(player) {
  alert(`${player}, let's go over the game play`);
  let gamePlayString =
    'The objective is to feed Homer a variety of items.\n' +
    "If he doesn't explode, you advance to the next level.\n" +
    'Beware though, Homer might randomly explode\n' +
    "Try not to feed him too fast or you'll be coverd in everything he ate.";

  alert(gamePlayString);
}

function setHomerB(lvl) {
  alert(
    `Level ${lvl}\nHomer has ${lvl *
      100} points\nDrop that down to zero to advance to the next level.`
  );
  return lvl * 100;
}

function feedHomer(food, lvl) {
  let homerBelly = setHomerB(lvl);
  let levelFood = Object.keys(foodLevels[lvl - 1]);

  while (homerBelly > 0) {
    let chosen = prompt(
      `Feed homer with the choice of food:\n ` + levelFood.join('\n')
    );

    if (homerBelly <= 0) {
      alert('You leveled up!');
    } else if (homerBelly > 0) {
      homerBelly -= foodLevels[lvl - 1][chosen];
      alert('Current remaining space is: ' + homerBelly);
    }
  }

  return feedHomer(foodLevels, lvl + 1);
}


// ***** dual version functions ***** //
function initGame() {
  if (typeof window === 'undefined') {
    consoleBrowser = 'T';
    introT();
    readLineFunc();
    feedHomerTerminal(foodLevels, 1);
  } else {
    consoleBrowser = 'B';
    // intro();
    let player = setPlayer();
    gameRulesB(player);
    feedHomer(foodLevels, 1);
  }
}

moveHomer(125, initGame);
