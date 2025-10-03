const { isEmpty } = require('../src/HospitalManagementSystem');



describe('Test For Hospital Management Syatem', () => {
    test('list for registered is empty', () => {
        expect(isEmpty([])).toBe(true);
    });


});