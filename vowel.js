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
