/*
SCOPE

1-grammarAndTypes
    03-scope.js
*/ 

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/ 

//Example 1
var x = 12;

function scope(){
    //var x = 33;
    //var y = 10;
    console.log(x);
}
scope(); //logs 33
//console.log(y)
console.log(x) //logs 12

//Example 2
var x = 12;

function scope(){
    x = 33
    console.log(x)
}

scope(); //33
console.log(x) //33

//Example 3
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3; //1st cosole.log to run because it is the most left indented function scope.
        console.log(x);
    }
    scopeInner();
    console.log(x); //2
}
scope();
console.log(x); // 1

//Example 4 constrasts with 3:
var x = 12;

function scope(){
    var x = 33;
    if (true){
       let x = 45;
       console.log(x); //45 
    }
    console.log(x); //33
}

scope();
console.log(x); //12

//Example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 --> var doesn't obey 'block' scope
}

scope();
console.log(x); //12