// belly stage 1
//     ___ String.fromCharCode(32,32,32,32,95,95,95)..
//    //_\\_ String.fromCharCode(32,32,32,47,47,95,92,92,95)..
//  ."\\    ". String.fromCharCode(32,46,34,92,92,32,32,32,32,34,46)...
// /          \ String.fromCharCode(47,32,32,32,32,32,32,32,32,32,32,92)...
// |           \_String.fromCharCode(124,32,32,32,32,32,32,32,32,32,32,32,92,95)..
// |       ,--.-.)String.fromCharCode(124,32,32,32,32,32,32,32,44,45,45,46,45,46,41)..
//  \     /  o \o\String.fromCharCode(92,32,32,32,32,32,47,32,32,111,32,92,111,92)..
//   /\/\  \    /_/String.fromCharCode(32,47,92,47,92,32,32,92,32,32,32,32,47,95,47)..
//    (_.   `--'__)String.fromCharCode(32,32,40,95,46,32,32,32,96,45,45,39,95,95,41)..
//    |     .-'  \String.fromCharCode(32,32,32,124,32,32,32,32,32,46,45,39,32,32,92)..
//    |  .-'.     )String.fromCharCode(32,32,32,124,32,32,46,45,39,32,32,32,32,32,41)..
//    | (  _/--.-'String.fromCharCode(32,32,32,124,32,40,32,32,95,47,46,46,45,46,39)..
//    |  `.___.'String.fromCharCode(32,32,32,124,32,32,96,46,95,95,95,46,39)..
//   _/    (     String.fromCharCode(32,32,95,47,32,32,32,32,40);
//  /      \\   String.fromCharCode(32,47,32,32,32,32,32,32,92,92);\* end of constant *\ 
// |         \\
// |          \\
// |           \\
// |            \\
// |             \\
// |              |)
// |               |)
// |                |)
// |                 |)
// |                  |)
// |                   |)
// |           _________|)
// ))))))))))))) 
// |         //  String.fromCharCode(124, )
// 
// let strBlt = ")";
// let HomersBelt = function(level,long)( 
//   if(long === "undefined") long = 13;
//   if(level === "undefined") level = 1;
// )
// //'
// template for other objets
const templateObj   = {}
templateObj.first   = ""
templateObj.last    = ""
templateObj.middle  = ""
templateObj.special1= ""

// three objects for consumption in assembleRow()
const objStrings = JSON.parse(JSON.stringify(templateObj));
const objRepeatChar = JSON.parse(JSON.stringify(templateObj));
const objSpecial = JSON.parse(JSON.stringify(templateObj));

// *** for testing only
objStrings.first = String.fromCharCode(124)
objStrings.last = String.fromCharCode(92)
objStrings.middle = String.fromCharCode(32)

objRepeatChar.first = 1
objRepeatChar.last = 2
objRepeatChar.middle = 9
// *** for testing only
function assembleRow (objStrings,objRepeatChar,objSpecial){// Takes three objects and returns a string 
  // objStrings >> contains the starting,ending, middle charset. May contain a 4th property called special1
  // objRepeatChar >> contains the repetition counts for the starting,ending, middle charsets. 
  //    May contain a 4th repetition count called special1
  let strFirst  = ""
  let strLast   = ""
  let strMiddle = ""
  
  for( let i = 0;i<objRepeatChar.first; i++){
    strFirst = strFirst.concat(objStrings.first)
  }
  for( let i = 0;i<objRepeatChar.last; i++){
    strLast = strLast.concat(objStrings.last)
  }
  for( let i = 0;i<objRepeatChar.middle; i++){
    strMiddle = strMiddle.concat(objStrings.middle)
  }
  console.log("drumroll please...", strFirst.concat(strMiddle,strLast)," the result");
}

assembleRow(objStrings,objRepeatChar)
// belly stage 5

//     ___ String.fromCharCode(32,32,32,32,95,95,95)..
//    //_\\_ String.fromCharCode(32,32,32,47,47,95,92,92,95)..
//  ."\\    ". String.fromCharCode(32,46,34,92,92,32,32,32,32,34,46)...
// /          \ String.fromCharCode(47,32,32,32,32,32,32,32,32,32,32,92)...
// |           \_String.fromCharCode(124,32,32,32,32,32,32,32,32,32,32,32,92,95)..
// |       ,--.-.)String.fromCharCode(124,32,32,32,32,32,32,32,44,45,45,46,45,46,41)..
// \     /  o \o\String.fromCharCode(92,32,32,32,32,32,47,32,32,111,32,92,111,92)..
//  /\/\  \    /_/String.fromCharCode(32,47,92,47,92,32,32,92,32,32,32,32,47,95,47)..
//   (_.   `--'__)String.fromCharCode(32,32,40,95,46,32,32,32,96,45,45,39,95,95,41)..
//    |     .-'  \String.fromCharCode(32,32,32,124,32,32,32,32,32,46,45,39,32,32,92)..
//    |  .-'.     )String.fromCharCode(32,32,32,124,32,32,46,45,39,32,32,32,32,32,41)..
//    | (  _/--.-'String.fromCharCode(32,32,32,124,32,40,32,32,95,47,46,46,45,46,39)..
//    |  `.___.'String.fromCharCode(32,32,32,124,32,32,96,46,95,95,95,46,39)..
//   _/    (     String.fromCharCode(32,32,95,47,32,32,32,32,40);
//  /      \\   String.fromCharCode(32,47,32,32,32,32,32,32,92,92);\* end of constant *\ 
// |     \\
// |      \\__
// |          \\__
// |              \\__
// |                  \\__
// |                      |)_
// |                         |)_
// |                            |)
// |                            |)
// |                         __|)
// |                     __|)
// |             ______|)
// ))))))))))))))
// |         //
// 
// 
// 
// 
// 
// // function questionAnswer(question){
// //   console.log(question);
// // 
// // }
// // 
// // questionAnswer("this is the question")
// 
// // this is a function that takes an array of objects. 
// // Each element of the array as an object that has a question.
// // const arrQuestion = ["What is your name",
// // "What do have any final words to say to Homer be fore he bursts",
// // ""];
// // const objAnswers = {};

