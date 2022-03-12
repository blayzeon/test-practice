const analyzeArray = require('./analyzeArray');

test('check for the correct object minimum', () => {
    expect(analyzeArray([1, 2, 3])).toEqual(expect.objectContaining({min: 1}));
});

test('check for the correct object minimum and maximum', () => {
    expect(analyzeArray([1, 2, 3])).toEqual(expect.objectContaining({min: 1, max: 3}));
});