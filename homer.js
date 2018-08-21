const foodLevels = [
  {
    donut: 35,
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

function intro() {
  const string =
    '\nWelcome to Happy, Happy Homer.\n' +
    "A fun game Homer from the Simpsons can't stop eating\n" +
    'Feed him everything you can to satisfy his craving.\n';
  return confirm(string);
}

function setPlayer() {
  const str1 = "Let's get started\nWhat is your name?";
  let player = prompt(str1);
  return [confirm(`Hello ${player}!\nLet's continue`), player];
  // return player;
}

function gameRules(player) {
  let gamePlayString =
    `${player}, let's go over the game play\n` +
    'The objective is to feed Homer a variety of items.\n' +
    "If he doesn't explode, you advance to the next level.\n" +
    'Beware though, Homer might randomly explode\n' +
    "Try not to feed him too fast or you'll be coverd in everything he ate.";

  return confirm(gamePlayString);
}

function setHomer(lvl) {
  let str1 = `Level ${lvl}\nHomer has ${lvl *
    100} points\nDrop that down to zero to advance to the next level.`;
  return lvl * 100;
}

function feedHomer(food, lvl) {
  let homerBelly = setHomer(lvl);
  let levelFood = Object.keys(foodLevels[lvl - 1]);

  while (homerBelly > 0) {
    let chosen = prompt(
      `Feed homer with the choice of food:\n ` + levelFood.join('\n')
    );

    homerBelly -= foodLevels[lvl - 1][chosen];
    alert(
      `You feed Homer ${chosen}. You can feed him ${homerBelly} points more`
    );

    if (homerBelly <= 0) {
      console.clear();
      console.log(ascii[lvl - 1]);
      alert('You leveled up!\nHere is a prize.\nCheck your console');
    } else if (homerBelly > 0) {
      if (homerBelly <= (lvl * 100) / 2) {
        if (vomit(homerBelly, foodLevels[lvl - 1][chosen])) {
          return gameOver(false);
        }
      }
    }
  }

  return feedHomer(foodLevels, lvl + 1);
}

function gameOver(bool) {
  if (!bool) {
    alert("You Lost! Homer couldn't handle all the food");
    console.clear();
    console.log(ascii[4]);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function vomit(belly, input) {
  // set Random Number
  let randNum = getRandomInt(10, belly);
  // get input value

  if (input > randNum) {
    return true;
  }
  return false;
}

function initGame() {
  if (intro()) {
    let arrSetPlayer = setPlayer();
    let player = arrSetPlayer[1];
    if (arrSetPlayer[0] === true) {
      if (gameRules(player)) {
        feedHomer(foodLevels, 1);
      }
    }
  }
}

moveHomer(125, initGame);

let ascii = [
  `
                .\V/,
               ()_()_)
              (.(_)()_)
               (_(_).)'
                ''"''
    `,
  `
                 [=]
                 | |
                 }@{
                /   \\ 
                |&&&|
                |&&&|
                |---|
                '---'
    
    `,
  `
     
               |    |
               |~~~~|
               '-..-'
                 ||
                _||_
                """"
                `,
  `       
    
                      HURRAY YOU WON!
        THAT WAS A LOOOONG GAME, LET'S HAVE A DRINK!
             *            *               )   *
                   )             *      (
                  (            )          )  
            )        )    *   (         (      
          (         *          )          )
            )                          (        *
                                         )
                           [ ]            
                       *   |-|       *         
      (        *           |_|        .          
       )                   | |    .  
      (         (         /   \\     .     .        *
       )         )       |_____|    .    .  
                (        | ___ |  \\~~~/   .   
                     *   | \ // |   \\_/  \\~~~/   
                         | _Y_ |    |    \\_/   
             *           |-----|  __|__   |      *
                         '-----'        __|__
    `,
  `
                  OH SHIT! YOU LOST HOMER! :(
                    
                             (   )
                          (   ) (
                           ) _   )
                            ( \\_
                          _(_\\ \\)__
                         (____\\___)) 
    
                      ***!GAME OVER!***
    
    `
];
