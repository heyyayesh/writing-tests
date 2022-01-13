import caesarCipher from './caesarCipher';

test('test normal cipher', () => {
    expect(caesarCipher('ayesh', 1)).toBe('bzfti');
});

test('test with wrapping from z to a', () => {
    expect(caesarCipher('xyz', 5)).toBe('cde');
});

test('test keeping case', () => {
    expect(caesarCipher('BiswaL', 3)).toBe('ElvzdO');
});

test('test with punctuation', () => {
    expect(caesarCipher(`isn't your name ayesh?`, 1)).toBe(`jto'u zpvs obnf bzfti?`);
});