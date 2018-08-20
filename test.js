// ver 1
function inOut(qst,cb,oth){
  console.log(qst);
  let stdin = process.openStdin();

  stdin.addListener("data", function(d) {
      let resAns = d.toString().trim()
      if(resAns.toLowerCase() === 'exit'){
        console.log(
          'Your leaving us already? OK.\nJust as Homer would say,\n'
          + "Kids, just because I don't care doesn't mean I'm not listening."
        )
        process.stdin.pause();
      }else{ 
        return resAns
      }
    })
      
}
      
(function testStart(){
  let myAns = inOut("this question");
  console.log(myAns)
})()
// console.log("enter anything");
// var stdin = process.openStdin();
// stdin.addListener("data", function(d) {
//   console.log(1);
//     // note:  d is an object, and when converted to a string it will
//     // end with a linefeed.  so we (rather crudely) account for that  
//     // with toString() and then trim() 
//     let responseAnswer = d.toString().trim()
//     console.log("you entered: [" + 
//         responseAnswer + "]");
//         // if (responseAnswer.toLowerCase() === 'exit'){
//         //   // console.log("You sure you want to exit?")
//         //   process.stdin.pause();
//         //   // process.stdin.resume();
//         //   // if (responseAnswer.toLowerCase().slice(0,1) === 'y'){
//         //     console.log("Ok.\nGood Bye!")
//         //   //   process.stdin.pause();
//         //   // }
//         // }
// 
// 
//         // else console.log("what else")
//   });

// ver 2
// const stdin = process.openStdin();
// let content = '';
// 
// stdin.addListener('data', d => {
//   console.log("enter something")
//   content += d.toString();
// });
// 
// stdin.addListener('end', () => {
//   console.log(`Input: ${content}`);
// });