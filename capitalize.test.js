const capitalize = require('./capitalize');

test('takes a string and returns it with the first letter capitalized', ()=>{
    expect(capitalize('This is a TEST STRING!')).toBe('This is a test string!');
})