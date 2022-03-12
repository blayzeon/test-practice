const calculator = require('../functions/calculator');

test('adds two numbers', ()=> {
    expect(calculator.add(2, 2)).toBe(4);
});

test('subtracts two numbers', ()=> {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('multiplies two numbers', ()=> {
    expect(calculator.multiply(3, 5)).toBe(15);
});

test('divides two numbers', ()=> {
    expect(calculator.divide(15, 3)).toBe(5);
});

test('test for strings', ()=> {
    expect(calculator.subtract('4', '2')).toBe(2);
});

test('test for NaN', ()=> {
    expect(calculator.subtract('cat', '/')).toBeNaN();
});

test('test for no params', ()=> {
    expect(calculator.subtract()).toBeNaN();
});