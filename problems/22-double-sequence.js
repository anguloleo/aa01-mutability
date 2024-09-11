/*
Write a function doubleSequence that accepts a base and a length as
arguments. The function should return an array representing a sequence that
contains "length" elements. The first element of the sequence is always the
"base", the subsequent elements can be generated by doubling the previous
element of the sequence.
*/

function doubleSequence(base, aLength){
    let arr = [];

    if(aLength < 1){
        
        return arr;
    }

    else {
        arr.push(base);

        for(let i = 0; i < aLength-1; i++){

            arr.push(arr[i] * 2);
        }
        return arr;
    }
    
}

// console.log(doubleSequence(7, 3));  // [7, 14, 28]
// console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
// console.log(doubleSequence(5, 3));  // [5, 10, 20]
// console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
// console.log(doubleSequence(5, 0));  // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleSequence;