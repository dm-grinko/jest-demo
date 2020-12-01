
const { greeting, sum } = require('../index');
const getType = require('jest-get-type');

test('should return Hello World', () => {
    const result = greeting();
    expect(result).toBe('Hello World');
});

test('should return Hello Dmitry', () => {
    const result = greeting('Dmitry');
    expect(result).toBe('Hello Dmitry');
});

test('should return string', () => {
    const result = greeting();
    expect(getType(result)).toBe('string');
});

test('should return correct sum', () => {
    const result = sum(1, 2, 30);
    expect(result).toBe(33);
});

test('should return number', () => {
    const result = sum();
    expect(getType(result)).toBe('number');
});
