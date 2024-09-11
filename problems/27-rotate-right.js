/*
Write a function rotateRight(array, num) that takes in an array and a number as
args. The function should return a new array where the elements of the array are
rotated to the right num times. The function should not mutate the original
array and instead return a new array.

HINT: you can use Array's slice() method to create a copy of an array
*/

function rotateRight(arr, num){

    // let newArrStart = [];
    // let newArrEnd = [];
    let finalArr = [];
    
    for(let i = 0; i < num; i++){

        //copy numbers at begging
        let newArrStart = arr.slice(0, arr.length-num)
        //copy numbers at end
        let newArrEnd = arr.slice(arr.length-num, arr.length)
        //concat both arrays
        finalArr = newArrEnd.concat(newArrStart);

    }

    return finalArr;
    
}


// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotateRight;