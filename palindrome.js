// Check for Palindrome

/**
 *  this function takes a string as input
 *  first it checks the input type. if its not a string, it returns;
 *  
 * then it split -> unshift -> join the string an make it reverse ultimately
 * 
 * then it checks if the input  string and the reversed string is same or not.
 * if same, it returns true or else it returns false;
 * 
 */

function checkPalindrome(str) {
    if (typeof str !== 'string') return 'input must be a string';
    console.log(str);

    const strArray = str.split('');
    let reversedArray = [];

    for (const str of strArray) {
        reversedArray.unshift(str);
    }

    const reversedString = reversedArray.join('');
    console.log(reversedString);

    if (str === reversedString) return true;
    else return false;


}

console.log(checkPalindrome('pop'));