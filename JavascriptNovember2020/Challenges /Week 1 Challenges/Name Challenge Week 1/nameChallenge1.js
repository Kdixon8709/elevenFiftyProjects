
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.*/

let myName = "Kquanisha";
let friendName = "Carla";
let sentence;

// console.log(myName.length)
// console.log(friendName.length)

/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer.
Example Result: My name is longer than Carla's.
*/


    let myName = "Kquanisha";
    let friendName = "Carla";
    let sentence;

    if (myName.length > friendName.length) {
        sentence = "My name is longer than" + friendName;
        console.log(sentence);
    } else {
        sentence = `${friendName}'s name is longer than ${myName}`; 
        console.log(sentence);
    }

    /* GOLD
    In the console log include how many letters difference there are between the names.
    Example Result: Adam's name is shorter than mine by 4 letters.
    There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
     */

    const myName = "Kquanisha";
    const friendName = "Carla";
    let sentence;

    if (myName.length > friendName.length) {
        sentence = "My name is longer than" + friendName;
        console.log(sentence);
    } else if (myName.length == friendName.length) {const differenceInLetters = friendName.length - myName.length;
       sentence = `${friendName}'s name is equal to ${myName}. ${differenceInLetters} letters are different`;
       console.log(sentence);
    } else {
        //const differenceInLetters = myName.length - friendName.length;
        const differenceInLetters = friendName.length - myName.length;

        sentence = `${friendName}'s name is longer then ${myName} by ${differenceInLetters} letters`;
        console.log(sentence);
    }

    
        