//   Find the Maximum Number

/**
 *  this function takes and array of numbers as input
 *  first it checks the input is an Array or not
 *  then it loops through the Array
 *     -- in that loop it first checks:
 *          - if every element is a number or not, if not --> return;
 *          - or else it compares every elements value with 0 and if the element value is higher than 0 then it sets the element as the value of that common variable.
 * 
 * this is how the max number comes out
 * 
 * 
 * 
 */

function maxNumber(numbers) {
    // console.log(numbers);

    // checks if it is not array -> return with warning
    if (!Array.isArray(numbers)) {
        return 'input must be an array of numbers';
    }

    // else function runs -->
    let maxNum = 0;
    for (const num of numbers) {
        // console.log(num);

        // check if the elements are number or not
        if(typeof num !== 'number') return 'array elements must be numbers!'


        if (num > maxNum) {
            maxNum = num
        }
    }
    return maxNum;
}

console.log(maxNumber([3, 2, '9', 1, '8','am']));