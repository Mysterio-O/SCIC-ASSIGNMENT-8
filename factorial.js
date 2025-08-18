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