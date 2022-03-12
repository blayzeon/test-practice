/*
    Takes a string and reverses it
*/

function reverseString(string){
    const array = Array.from(string);
    const reversed = [];
    for (let i = 0; i < array.length; i += 1){
        reversed.unshift(array[i]);
    }

    return reversed.join('');
}

module.exports = reverseString;