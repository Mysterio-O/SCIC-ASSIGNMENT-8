// Count Vowels in a String

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
