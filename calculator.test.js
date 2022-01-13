import calculator from './calculator';

test('addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtraction', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
});

test('mulitplication', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
});

test('division', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

test('division by 0', () => {
    expect(calculator.divide(78, 0)).toBe(undefined);
});