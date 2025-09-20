
const {power, toggleButton, currentTemperature, decreaseButton, increaseButton} = require('../src/AirCondition');

describe('Test for my new Hisense Air Condition button', ()=>{
    test('should power off', () => {
        expect(power()).toBe(false); // air condition is off
    });

test ('test that i can on my air condition', () => {
    expect(power()).toBe(false); //the air condition is off
    toggleButton();                // press the button to on the air condition
    expect(power()).toBe(true);    // the air condition is on
    toggleButton();                // press the button to off the air condition
    });

test('test to check if we on our ac and we can turn it off', ()=>{
    toggleButton(); //press the button to on tha air condition
    toggleButton(); //press the button to off the air condition
    expect(power()).toBe(false); // the air condition is off
    });
});




describe('Test for temperature Increment', ()=> {
    test('test to check my default temperature', ()=> {
        toggleButton();
        expect(currentTemperature()).toBe(24);
        toggleButton;
    });

    test('test to check if my ac can increse by 1', ()=>{
        toggleButton();
        expect(currentTemperature()).toBe(24);
        increaseButton();
        expect(currentTemperature()).toBe(23);
        toggleButton;        
    });

    test('test that i cannot increase Ac temperature without power on', ()=>{
        expect(()=> {
            throw new Error('Ac is not on')
        }).toThrow(increaseButton());
    });

    test('test that once the ac is on and its in highest it cannot increase again', () =>{
        toggleButton();
        for(let count = 1; count <= 5; count++){
            increaseButton();
        }
        expect(() =>{
            throw new Error('Ac is highest cannot be higher than this');
        }).toThrow(increaseButton());
    });

    test('test to check the current condition of the AC is !6', () => {
        toggleButton();
        expect(currentTemperature()).toBe(16);
    });

    test('test to check if my ac can decrese by 1', ()=>{
        toggleButton();
        expect(currentTemperature()).toBe(16);
        decreaseButton();
        expect(currentTemperature()).toBe(17);
        toggleButton;        
    });


    test('test that once the ac is on it cant decrease more than lowest 32', () => {
        toggleButton();
        for(let count = 1; count < 15; count++){
            decreaseButton();
        }
        expect(() =>{
            throw new Error('AC is highest cannot be lower than this');
        }).toThrow(decreaseButton());
    });

    test('test to check the current condition of the AC is 32', () => {
        toggleButton();
        expect(currentTemperature()).toBe(32);
    });


});



