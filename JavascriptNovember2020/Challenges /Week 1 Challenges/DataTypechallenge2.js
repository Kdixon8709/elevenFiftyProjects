// Notes
// let myString = "this is a string"
// let myNumber = 10;
// let myBoolean = false;
// let myArray = [10, "string", ["another string, 10"]];
// let myObject = {firstKey: "a string"}
// let myUndefined = undefined;
// let myNull = null;

// console.log(typeof myBoolean);

// Challenge

let user = {
    string: "Kquanisha", 
    age: "33", 
    boolean: true, 
    favoriteColor: "Purple", 
    ojbect: {},
    undefined: undefined

}



let value = typeof user.favoriteColor;

if (value === "Kquanisha") {
    console.log("The value is a string");
    
} else if (value === "age") {
    console.log("The value is a number");

} else if (value === "boolean") {
    console.log("The value is boolean");

} else if (value === "object") {
    console.log("The value is an object")
} else {
    console.log("What are you?")
}