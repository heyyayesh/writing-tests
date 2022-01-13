import capitalize from '../code/capitalize';

test('capitalizes first letter', () => {
    expect(capitalize('puppy')).toBe('Puppy');
});