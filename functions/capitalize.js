/* 
    A capitalize function that takes a string
    and returns it with the first character capitalized
*/

function capitalize(string) {
    // turn the string into a lowercase array
    const lower = Array.from(string.toLowerCase());

    // create a container to store the formatted string
    const capitalized = [];
    for (let i = 0; i < lower.length; i += 1){
        // capitalize the first letter and any letters that come after punctuation
        if (i === 0){
            capitalized.push(lower[0].toUpperCase());
            continue;
        }

        capitalized.push(lower[i]);
    }

    // return a string
    return capitalized.join('');
}

module.exports = capitalize; 