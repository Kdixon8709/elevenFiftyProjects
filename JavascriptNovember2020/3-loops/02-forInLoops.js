/*
FOR IN LOOPS
*/ 

//for-in does not require that the thing you loop through to be numbered

let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 2};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british short hair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAuL';
let capName;

for (n in instructor){
    if (n == 0){
      capName = instructor[n].toUpperCase();  
    } else {
        capName += instructor[n].toLowerCase();
    }
}
 console.log(capName); 