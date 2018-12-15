const f = require('./fibonacci');

describe('Test random number function', () => {
    test('Should be random number from 50 to 100', () => {
        const MIN = 50;
        const MAX = 100;
        for (let i = 0; i < 1000; i++) {
            const randomNumber = f.random(MIN, MAX);
            expect(randomNumber).toBeGreaterThanOrEqual(MIN);
            expect(randomNumber).toBeLessThanOrEqual(MAX);
        }
    });
});

describe('Test fibonacci function', () => {
    test('Should be first element equal to 0', () => {
        // generation of a single element sequence
        const result = f.fibonacciSequence(0);
        expect(result[0]).toBe(0);
    });

    test('Should be second element equal to 1', () => {
        // generating a sequence of two elements
        const result = f.fibonacciSequence(1);
        expect(result[1]).toBe(1);
    });

    test('Should be third element equal to 1', () => {
        const result = f.fibonacciSequence(2);
        expect(result[2]).toBe(1);
    });

    test('Should be element equal to the sum of the two preceding ones', () => {
        const result = f.fibonacciSequence(8);
        expect(result.pop()).toBe(result.pop() + result.pop());
    });

    test('Should be last element not more than a given number', () => {
        for (let i = 0; i < 1000; i++) {
            const randomNumber = f.random(50, 100);
            const result = f.fibonacciSequence(randomNumber);
            expect(result.pop()).toBeLessThanOrEqual(randomNumber);
        }
    });
});
