const analyzeArray = require('../functions/analyzeArray');

test('check for the correct object minimum', () => {
    expect(analyzeArray([1, 2, 3])).toEqual(expect.objectContaining({min: 1}));
});

test('check for the correct object minimum and maximum', () => {
    expect(analyzeArray([3, 1, 2])).toEqual(expect.objectContaining({min: 1, max: 3}));
});

test('check for the correct object minimum, maximum, average, and length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(expect.objectContaining({average: 4, min: 1, max: 8, length: 6}));
});