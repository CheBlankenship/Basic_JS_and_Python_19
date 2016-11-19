// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers(x, y) {
  for(var i= x; i <= y ;i++) {
    console.log(i);
  }
}


// printNumbers(1,10);


// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.
function makeSquare(x) {
  var result = "";
  for(var i=0; i<x; i++) {
    var row = "";
    for(var j=0; j<=x; j++) {
      var star = "*";
      row += star;
    }
    result += row + "\n";
  }
  return result;


}
// console.log(makeSquare(5));


// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

function henkan(str) {
  var result = [];
  var spt = str.split("");
  console.log(spt);

  for(var i=0; i<str.length; i++) {
    // var loop = spt[i];
    if(spt[i] === "A") {
      result.push("4");
    }
    else if(spt[i] === "E") {
      result.push("3");
    }
    else if(spt[i] === "G") {
      result.push("6");
    }
    else if(spt[i] === "I") {
      result.push("1");
    }
    else if(spt[i] === "S") {
      result.push("5");
    }

    else if(spt[i] === "T") {
      result.push("7");
    }
    else{
      result.push(" ");

    }
  }
  var join = result.join("");
  return join;
}
// console.log(henkan("ABGDIE"));



// Rock Paper Scissors

function jyanken(player1, player2) {
    if(player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 == 'rock') {
      console.log('player1 wins!');
    }
    else if(player2 === 'rock' && player1 === 'scissors' || player2 === 'scissors' && player1 === 'paper' || player2 === 'paper' && player1 == 'rock') {
      console.log('player2 wins!');
    }
    else{
      console.log('tie');
    }
}

// jyanken('rock', 'scissors');

// TICTACTOE

// function ticTacToe(table) {
//   var result = [];
//
//   for(var i=0; i < table.length; i++) {
//
//
//   }
//
// };
//
// ticTacToe([
//           ['O', 'O','O'],
//           ['X', 'X', 'O'],
//           ['X', 'O', 'X']
//         ]);













































// ////////////////////////////  /     / // / ////////////////
