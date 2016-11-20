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

var arr = [
            ["o", "o", "o"],
            ["x", "x", "x"],
            ["x", "x", "x"]
          ];

function classify(arr) {
  // var for0 = [];
  // var forX = [];
  var count0 = 0;
  var countX = 0;

for(var i=0; i< arr.length; i++) {
  for(var j=0; j<=2; j++) {
    if(arr[0][0] === 'o') {
      count0 += 1;
        if(arr[0][1] === 'o') {
          cont0 +=1;
        if(arr[0][2] === 'o'){
          count0 +=1;
        }
      }
    }
    if(count0 === 3){
      console.log("O is the winner!!!!!!!!");
    }
  }
}



  if(count0 === 3) {
    console.log("O wins!!");
    return ;
  }
  else{
    console.log("X wins!!");
    return ;
  }
}

//   console.log(count0);
//   console.log(countX);
// }


// classify(arr);


// positive num

var numbers = [1,2,3,4,5,-9,-5,-3,-44];

function positiveNum(arr){
  return arr.filter(function(num) {
    return num >0;
  });
}

// console.log(positiveNum(numbers));

// even numbers

function evenNum(arr) {
  return arr.filter(function(num) {
    return num %2 === 0;
  });

}

// console.log(evenNum(numbers));


function squareNum(arr) {
  return arr.map(function(num) {
      return num * num;
  });
}
// console.log(squareNum(numbers));


var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];


function  showCities(cities) {
  return cities.filter(function(mati) {
    return mati.temperature > 70;
  });
}

// console.log(showCities(cities));

function  showCitiesName(cities) {
  return cities.map(function(mati) {
    return mati.name;
    });
}

// console.log(showCitiesName(cities));


// Sum an array
var numbers = [1,2,3,4];


function sumArr(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b;
  },0);
}

// console.log(sumArr(numbers));

// Acronym

function acronym(words) {
    return words.reduce(function(a, b) {
      return a + b;
    },"");
}

// console.log(acronym(["Very", "Important", "Person"]));

// forEach

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];
// forEach(arr, function(person) {
//   console.log('Hello, ' + person.name + '!');
// });

// function aisatu(arr) {
//   return arr[0].name;
// }
// console.log(aisatu(arr));

// Usiing map
function loop(arr) {
  return arr.map(function(shimei) {
    console.log("Hello " + shimei.name + " !");
  });
}
loop(arr);

//
// function fun(arr) {
//   return arr.forEach(function(simei) {
//     return simei[i].name;
//   }, "");
// }
//
// console.log(fun(arr));





















































// ////////////////////////////  /     / // / ////////////////
