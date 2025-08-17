//  Remove Duplicates from an Array

/**
 *  this function takes an array of numbers as input
 *  first it checks if the input is an array or not, if not --> return;
 *  the it loops through the array
 *  then it checks if all the elements of that array is number or not, if not --> return;
 *  then it checks with another common array that if the element is already in that array or not.
 *  if its not there, then it will push the element into that common array
 * 
 * finally the duplicates are cut
 * 
 */

function removeDuplicates(array) {
    // console.log(array);

    // check if it is an array or not
    if (!Array.isArray(array)) return 'input must be an array of numbers';

    // common array to push
    let newArray = []

    // loop through the array and get the numbers one by one
    for (const a of array) {
        // console.log(a);

        // checks if all the elements are number or not
        if (typeof a !== 'number') return 'array elements must be numbers';


        // checks if the element is already in the array or not
        if (!newArray.includes(a))
            newArray.push(a);
    }
    // console.log(newArray);
    return newArray;

}

console.log(removeDuplicates([1, 1, 11, 14, 11, 21]));