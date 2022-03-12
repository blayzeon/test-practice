const caesarCipher = require('./caesarCipher');

test('shifts uppercase letters of a string by 1', ()=>{
    expect(caesarCipher('ABCDEF', 1)).toBe('BCDEFG');
});

test('shifts lowercase letters of a string by 1', ()=>{
    expect(caesarCipher('abcdef', 1)).toBe('bcdefg');
});

test('shifts mIxEd CaSe letters of a string by 1', ()=>{
    expect(caesarCipher('AbCdEf', 1)).toBe('BcDeFg');
});

test('checks for wrapping of lowercase letters', ()=>{
    expect(caesarCipher('abcdef', 20)).toBe('uvwxyz');
});

test('checks for wrapping of uppercase letters', ()=>{
    expect(caesarCipher('XYZ', 5)).toBe('FGH');
});

test('checks for wrapping with punctuation', ()=>{
    expect(caesarCipher('Hi, how\'s it going?', 1)).toBe('Ij, ipx\'t ju hpjoh?');
});