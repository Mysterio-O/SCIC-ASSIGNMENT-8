// Capitalize First Letter of Each Word

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