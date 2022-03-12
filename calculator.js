/*
    A basic calculator that takes two numbers and returns the result
*/

const calculator = {
    add(a, b){
        return Number(a) + Number(b);
    },

    subtract(a, b){
        return Number(a) - Number(b);
    },

    divide(a, b){
        return Number(a) / Number(b);
    },

    multiply(a ,b){
        return Number(a) * Number(b);
    }
}

module.exports = calculator;