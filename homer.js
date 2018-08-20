let readLine;
let rl;

function readLineFunc() {
  readLine = require('readline');
  rl = readLine.createInterface(process.stdin, process.stdout);
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

function gameOver() {}

function levelUpTerminal() {
  console.log('In Level Up');
}

function setHomerTerminal(lvl) {
  return lvl * 100;
}

function feedHomerTerminal(food, lvl) {
  let bellySize = setHomerTerminal(lvl);
  let levelFood = Object.keys(food[lvl - 1]);

  // while (homerBelly > 0) {
  rl.question(`Feed Homer:\n ${levelFood}? > `, answer => {
    bellySize -= food[lvl - 1][answer];
    process.stdout.write(`Belly size: ${bellySize}`);

    // if (bellySize > 0) {
    //   rl.setPrompt(
    //     `Homer is almost full, choose something else:\n ${levelFood} > `
    //   );
    //   rl.prompt();
    // }

    rl.on('line', answer => {
      if (bellySize > 0) {
        rl.setPrompt(
          `Homer is almost full, choose something else:\n ${levelFood} > `
        );
        rl.prompt();
        bellySize -= foodLevels[lvl - 1][answer];
        process.stdout.write(`New Belly Size: ${bellySize}`);
      } else {
        rl.close();
      }

      // if (bellySize <= 0) {
      //   rl.close();
      //   levelUp();
      // }
    });

    // feedHomer(food, lvl + 1);
  });
}

// ########################
// ##BROWESER CODE BELOW ##
// ########################

function intro() {
  const string =
    'Welcome to Happy, Happy Homer.\n' +
    "A fun game Homer from the Simpsons can't stop eating\n" +
    'Feed him everything you can to satisfy his craving.';
  alert(string);
}

function feedHomer(food) {}

function gameRules(player) {
  // alert(`${player}, let's go over the game play`);
  let gamePlayString =
    'The objective is to feed Homer a variety of items.\n' +
    "If he doesn't explode, you advance to the next level.\n" +
    'Beware though, Homer might randomly explode\n' +
    "Try not to feed him too fast or you'll be coverd in everything he ate.";

  // alert(gamePlayString);
}

function setHomer(lvl) {
  alert(
    `Level ${lvl}\nHomer has ${lvl *
      100} points\nDrop that down to zero to advance to the next level.`
  );
  let level = lvl * 100;
  return level;
}

function feedHomer(food, lvl) {
  let homerBelly = setHomer(lvl);
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

// feedHomer(foodLevels, 1);

(function initGame() {
  if (typeof window === 'undefined') {
    readLineFunc();
    feedHomerTerminal(foodLevels, 1);
  } else {
    intro();
    let player = setPlayer();
    gameRules(player);
    feedHomer(foodLevels, 1);
  }
})();
