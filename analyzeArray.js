/*
    Takes an array of numbers and returns their properties
    * average: average of all the numbers
    * min: lowest number in the array
    * max: highest number in the array
    * length: total items in the array
*/

function analyzeArray(array){
    let result = {};
    let sum = 0;
    for (let i = 0; i < array.length; i += 1){
        if (!result.min || array[i] < result.min){
            result.min = array[i];
        }

        if (!result.max || array[i] > result.max){
            result.max = array[i]
        }
        sum += array[i];
    }

    result.length = array.length;
    result.average = sum / result.length;
    return result;
}

module.exports = analyzeArray;