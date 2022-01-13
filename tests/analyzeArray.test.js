import analyzeArray from '../code/analyzeArray';

test('average', () => {
    expect(analyzeArray([1,2,3]).average).toEqual(2);
});

test('maximum', () => {
    expect(analyzeArray([1,2,3]).max).toBe(3);
});

test('minimum', () => {
    expect(analyzeArray([1,2,3]).min).toBe(1);
});

test('length', () => {
    expect(analyzeArray([1,2,3]).length).toBe(3);
});