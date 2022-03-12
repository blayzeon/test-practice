/* 
    Takes a string, and using ASCII, converts it to another letter
    as dictated by the degree amount

    Get the charcode with item.charCodeAt(index);
    Convert back to a string with String.fromCharCode(code, code, code);

    A-Z = 65-90
    a-z = 97-122
*/

function caesarCipher(string, degree){
    // convert the string into a char code array
    const charArray = [];
    for (let i = 0; i < string.length; i += 1){
        charArray.push(string.charCodeAt(i));
    }

    const result = charArray.map((item) => {
        let code = item;
        // check to make sure that this is a letter    
        if (code >= 65 && code <= 90 || code >= 97 && code <= 122){
            let adjust = false;

            // check if it is uppercase
            if (code <= 90){
                if (code + degree > 90){
                    // if it is over 90 after adding the degree, we will need to adjust
                    adjust = true;
                }
            } else if (code + degree > 122){
                // make the same check for lowercase
                adjust = true;
            }

            if (adjust === true){
                // add the degree via a loop to make sure no overflow
                for (let i = degree; i >= 0; i --){
                    // if the code is over the threshhold, reset it 
                    if (code === 90 || code === 122){
                        code -= 24;
                    }
                    code += 1;
                }
            } else {
                // add the degree to the code normally
                code += degree;
            }

            
        }

        // return the converted letter
        return String.fromCharCode(code);
    });

    return result.join('');
}

module.exports = caesarCipher;