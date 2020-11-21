/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/ 

//Example 1
console.log(scissors);
var scissors = 'blue';

//Example 1 Breakdown:
var scissors;
console.log(scissors);
scissors = 'blue';

//Example 2
function hoistTest(){
  console.log(testVar);
  var testVar = 10;
  console.log(testVar);
}

hoistTest();

//Example 2 Breakdown
function hoistTest(){
  var testVar;
  console.log(testVar);
  testVar = 10;
  console.log(testVar);  
}

hoistTest();