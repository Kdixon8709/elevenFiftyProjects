/*For Of Loops

-For of loops parse through an iterable list of numbers - so that makes them great for working with arrays

-Arrarys contain what are known as iterable properties. Each property - or value - in a array, each contains it own index(starting at 0)

            value
let arr = ['chicken, 'turkey', 'duck']   
                0        1        2
                index    

*/

/* BRONZE
​
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
​
*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for (pie of pies){
    console.log(`${pie} pie`);

}
​
/* SILVER
​
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
​
    - Use google to search for an array method that checks if an array includes a certain value
​
*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for (pie of pies){
    if (pie.includes('apple')){
        console.log(`${pie} pie is a fruit pie`)
    } else {
        console.log(`${pie} pie is not a fruit pie`)
    }

    }
​
/* GOLD
​
    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
​
*/


let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for (pie of pies){
    if (pie.includes('apple')|| pie.includes('blueberry')|| pie.includes('cherry') || pie.includes('peach')){
        console.log(`${pie} pie is a fruit pie`)
    } else {
        console.log(`${pie} pie is not a fruit pie`)
    }

    }
​


// let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']