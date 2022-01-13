import capitalize from './capitalize';

test('capitalizes first letter', () => {
    expect(capitalize('puppy')).toBe('Puppy');
});