// Capitalize First Letter of Each Word

/**
 * this function takes an string as input and validates first if its a string or not
 * 
 * then splits the string into an array
 * 
 * then it loop through that array and pick every element and turn their first letter capital and the rest lowercase and storing them into another variable
 * then  pushing that variable into another array.
 * 
 */

function capitalizeFirstWord(str) {
    // console.log(str);

    // check if it is string or not
    if (typeof str !== 'string') return 'input must be a string';

    // split the sting into spaces
    const words = str.split(' ');
    // console.log(words);

    let final = []

    // loop through the array
    for (const word of words) {
        // console.log(word);
        const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
        final.push(capitalized);
    }

    return final.join(' ');

}

console.log(capitalizeFirstWord('hello world'));







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






//  Find the Factorial of a Number

/**
 * 
 * this function takes a number as input
 *  first it check the input type, if the type is not a number then it returns
 *  then it checks the number value, if it is less than 0 then it returns with warning
 *  then it checks if the number is 0 or 1, if it is then it returns 1
 *  then it starts a loop setting condition with the input number
 *  then it multiplies the result with the loop element from iteration each time
 *  finally it returns the result as the factorial number
 * 
 */

function factorialNumber(number) {
    if (typeof number !== 'number') return 'input must be a number';

    if (number < 0) return "input can't be a negative number";

    if (number === 0 || number === 1) return 1;

    let result = 1;

    for (let n = 2; n <= number; n++) {
        // console.log(n);
        result *= n;
    }
    return result;

}

console.log(factorialNumber(NaN));



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
    // console.log(maxNum);
    return maxNum;
}

console.log(maxNumber([3, 2, 9, 1, 8]));




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
    // console.log(str);

    const strArray = str.split('');
    let reversedArray = [];

    for (const str of strArray) {
        reversedArray.unshift(str);
    }

    const reversedString = reversedArray.join('');
    // console.log(reversedString);

    if (str === reversedString) return true;
    else return false;


}

console.log(checkPalindrome('pop'));



//  PingPong Challenge

/**
 * this function takes doesn't take any input.
 * this function prints number 1-20 and all those numbers which can be divided by 3 those got replaced with PING and those who can be divided by 5 got replaced by PONG.
 * it first starts a loop
 * then it checks all the element from the loop on every iteration
 *   if the number is divided by 3 or not, if yes- it pushing ping, then continue (means: pushing ping into the array and then skip this iteration and jump to the next)
 *   then another checking for numbers which can be divided by 5. pushed 'pong' here and continue
 * 
 *  and behind all these conditions its pushing the loop element into the array and finally returning the array
 */

function ping_pong() {
    // console.log('pingpong');
    let number = 20

    const pingPong = [];

    for (let i = 1; i <= number; i++) {
        // console.log(i);

        // console.log(i % 3);

        if (i % 3 === 0) {
            console.log(i);
            pingPong.push('Ping');
            continue;
        }
        if (i % 5 === 0) {
            pingPong.push('Pong');
            continue;
        }
        pingPong.push(i);

    }
    console.log(pingPong);

}

ping_pong();



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
        if (!newArray.includes(a)){
            newArray.push(a);
        }
            
    }
    // console.log(newArray);
    return newArray;

}

console.log(removeDuplicates([1, 1, 11, 14, 11, 21]));



// Reverse a String

/**
 * this function takes string as output.
 * first it checks if the input type is string or not, if it is string then it will execute the process or else, it will avoid the process
 * 
 * at first it splits the string into an array and then loop through the array. in that loop, the function unshift every element of that array into another array. unshift basically push element from the back side and it reverse the words order. then the function join those words into a string. and it the the reversed string
 *  
 */

function fnReverse(str) {
    // console.log(str)
    if (typeof str === 'string') {
        // splitting the string and turning into an array
        const strArr = str.split('');
        // console.log(strArr);

        let array = [];

        //loop through the array
        for (const s of strArr) {
            // console.log(s);
            array.unshift(s);
        }
        // console.log(array);

        const finalOutput = array.join('');
        // console.log(finalOutput);
        return finalOutput
    }
    else {
        // console.log('input must be a string');
        return 'input must be a string'
    }
}

console.log(fnReverse('Hello World'));



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



// Count Vowels in a String

/**
 * 
 * this function takes a string as input.
 * first it checks the type, if its not a string it returns ;
 * 
 * then it splits the string into an array containing all those words from string separately.
 * 
 * then it loop through the array and checks if the element is already in the vowel array or not
 * if it is already there, then it increase the total count by one. and finally returns the count.
 * 
 * this sends the vowel count from a string
 * 
 *
 */

function countVowels(str) {
    if (typeof str !== 'string') return 'input must be a string';
    // console.log(str);
    const words = str.toLowerCase().split('');
    // console.log(words);

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (word of words) {
        // console.log(word);
        if (vowels.includes(word)) {
            count++;
        }
    };
    // console.log(count);
    return count;

}

console.log(countVowels('This Checks Numbers Of Vowels'));
