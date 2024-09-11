/*
Write a function rotate(array, num) that takes in an array and a number as args.
When the num is positive, the elements of the array should be rotated to the
right. When the num is negative, the elements of the array should be rotated to
the left. The function should mutate the original array.
*/

function rotate(arr, num){
    let tempArr = [];
    let newArr = [];
    let startIndex;
    let numToRemove;

    if(num > 0){

        for(let i = 0; i < num; i++){

            //remove from end and put on front
            arr.splice(0, 0, arr.pop())
        }

        return arr;
    }

    else{

        for(let i = 0; i < num; i++){

            //remove from start and put on end
            arr.splice(arr.length-1, 0, arr.shift())
        }

        return arr;
    }

}


// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotate;