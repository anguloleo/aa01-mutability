/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

function fibonacciSequence(length){

    let arr = [];

    if(length < 1){
        return arr;
    }
    
    arr.push(1);
    arr.push(1);

    for(let i = 0; i < length-2; i++){

        arr.push(arr[i] + arr[i+1]);
    }

    return arr;

}


// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(0));  // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;