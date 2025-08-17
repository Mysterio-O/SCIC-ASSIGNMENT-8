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

        const finalOutput = array.join(' ');
        // console.log(finalOutput);
        return finalOutput
    }
    else {
        // console.log('input must be a string');
        return 'input must be a string'
    }
}

console.log(fnReverse('Hello World'))