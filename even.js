//  Find Even Numbers in an Array

/**
 * this function takes and array of numbers as an input
 *  first it checks if the input is an array or not, if not --> return;
 * then it loop through the array
 * checks all elements are number or not
 * then checks if its dividable with with 2 or not
 * if it is --> push into the newArray
 * 
 * the newArray is a new array now with only even numbers
 * 
 */

function findTheEvenNumbers(numbers) {
    // console.log(numbers);

    //  check if the input is an array or not
    if (!Array.isArray(numbers)) return 'input must be an Array of numbers';

    const finalArray = []

    // loop
    for (const number of numbers) {
        // console.log(number % 2);

        if(typeof number !== 'number') return 'Array element must be numbers.'

        //  checks if its even or odd number
        if (number % 2 === 0) {
            finalArray.push(number);
        }
    }
    // console.log(finalArray);
    return finalArray;
}

console.log(findTheEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));