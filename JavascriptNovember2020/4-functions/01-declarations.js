/*
FUNCTIONS
*/ 

//Genernal Ideas: at their broadest level, functions do the following:
//1) they take some input which the  fucntion will handle or process
//2) they process the input given to them
//3) they usually, but not always return some value
//4) they can be invoked or used as many times as we want, cutting down on code repitition

//Example 1:
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10)); //will need to have console.log before newFunc
console.log(newFunc(11));
console.log(newFunc(-2));

//Example 2
function sentence(firstName, lastName){
    return`My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Johnathan', 'Huer'));
console.log(sentence('Tyler', 'Shelton'));
let superImportanceSentence = sentence('Nicky', 'Disborough')
console.log(superImportanceSentence); 

//lets build a function that takes a complex type--an array in this case and console.logs each
//item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10]; 

function interatorFunc(inputArr){
   for(let element of inputArr){
       console.log(element);
   }
}
interatorFunc(arr);
interatorFunc(arr2);