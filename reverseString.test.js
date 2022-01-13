import reverseString from './reverseString';

test('reverses the string', () => {
    expect(reverseString('supper with pupper')).toBe('reppup htiw reppus');
});