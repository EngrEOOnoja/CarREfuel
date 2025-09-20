const {power, toggleButton, fuelLevel, toFuel, toDrive, toAccelerate, getaccelerate}  = require('../src/CarFuel');


describe('Test for my new Cyber Truck Ignition', ()=>{
    test('should power off', () => {
        expect(power()).toBe(false); // Car is Off.
    });

    test('should be able to turn on the car', () => {
        expect(power()).toBe(false); // Car is Off.
        toggleButton();
        expect(power()).toBe(true); // Car is On.
        toggleButton();       
    });

    test('should be able to turn off the car', () => {
        
        toggleButton();
        toggleButton();
        expect(power()).toBe(false); // Car is Off.       
    });
    test('should be able to fuel the car', () => {
        expect(power()).toBe(false); // Car is Off.
        toggleButton();
        expect(power()).toBe(true); // Car is On.
    });

    test('should not be able to fuel the car when it is on', () => {
        expect(power()).toBe(true); // Car is On.
        expect(() => toFuel()).toThrow('Cannot refuel while car is running');
    });

    test('should be able to fuel the car when it is off', () => {
        toggleButton();
        expect(power()).toBe(false); // Car is Off.
        toFuel();
        expect(fuelLevel()).toBe(1); // Fuel level is 1.
    });

    test('should not be able to fuel the car when fuel tank is full', () => {
        expect(power()).toBe(false); // Car is Off.
        for(let count = fuelLevel(); count < 50; count++){
            toFuel();}
        expect(fuelLevel()).toBe(50); // Fuel level is 50.
        expect(() => toFuel()).toThrow('Fuel tank is full');
    });

    test('should not be able to drive when car is off', () => {
        expect(power()).toBe(false); // Car is Off.
        expect(() => toDrive()).toThrow('Not moving');
    });
    

    test ('car can drive when it has fuel and is on', () => {
    
        toggleButton();
        expect(power()).toBe(true); // Car is Off.
        for(let count = fuelLevel(); count < 10; count++){
            toFuel();
        }       
        expect(fuelLevel()).toBe(50); // Fuel level is 10.
        toggleButton();
        expect(power()).toBe(false); // Car is On.
    });
    test('current fuel level should decrease by 1 when accelerating between 1 - 20', () => {
        toggleButton();
        expect(power()).toBe(true); // Car is On.
        for(let count = fuelLevel(); count < 10; count++){
            toFuel();
        }       
        expect(fuelLevel()).toBe(50); // Fuel level is 10.
        toAccelerate(10);
        expect(getaccelerate()).toBe(10);  // Car is accelerating at 10.
        toDrive();
        expect(fuelLevel()).toBe(49); // Fuel level is 9.
        toggleButton();
        expect(power()).toBe(false); // Car is Off.
    });

    test('current fuel level should decrease by 2 when accelerating between 40 - 60', () => {
        toggleButton();
        expect(power()).toBe(true); // Car is On.
        for(let count = fuelLevel(); count < 10; count++){
            toFuel();
        }           
        expect(fuelLevel()).toBe(50); // Fuel level is 10.
        toAccelerate(50);
        expect(getaccelerate()).toBe(50);  // Car is accelerating at 50.
        toDrive();
        expect(fuelLevel()).toBe(48); // Fuel level is 8.
        toggleButton();
        expect(power()).toBe(false); // Car is Off.
    });
    
});

















