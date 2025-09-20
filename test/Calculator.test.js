
const {add, subtract} = require('../src/Calculator');

test('test to add 2 + 1', () => {
    let result = add(2, 1);
    expect(result).toBe(3);
})

test('test to subtract 10 - 5', () => {
    let result = subtract(10 , 5);
    expect(result).toBe(5);
});