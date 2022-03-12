const reverseString = require('./reverseString');

test('Takes a string and returns it reversed', ()=>{
    expect(reverseString('This is a test string!')).toBe('!gnirts tset a si sihT');
});