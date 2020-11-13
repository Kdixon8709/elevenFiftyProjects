console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var birthCity = "Indianapolis ";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState); 
 
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log("I graduated from" + highschool+ "in" +gradYear+ ".");

//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]


