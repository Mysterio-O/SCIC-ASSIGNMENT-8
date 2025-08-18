//  Sum of All Numbers in an Array

/**
 *  this function takes an array of numbers as input
 *  at first it checks if the input is an array or not, if not --> return;
 *  then it starts a loop
 *  in that loop first it checks if the element is a number or not in every iteration.
 *  if its not a number --> return;
 * 
 *  then it adds every number with the total value and the total variable becomes the sum of the numbers.
 * 
 */

function sumOfAllNumbers(numbers) {
    // console.log(numbers);

    // checks if the input is an array or not
    if (!Array.isArray(numbers)) return 'input must be an Array of numbers';

    let total = 0;

    // loop through the array
    for (const number of numbers) {
        // console.log(number);

        //check if the element is a number or not
        if (typeof number !== 'number') return 'Array element must be numbers'

        // adding every number one by one with total variable
        total += number
    }
    // console.log(total);
    return total;
}

console.log(sumOfAllNumbers([10, 20, 30, 40, 50, 60, 70, 80, 90]));