const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    const gal = '4gal'
    const km = '1/2km'
    const lbs = '5.4/3lbs'
    const kg = 'kg'

    test('Read a whole number input', () => {
        assert.isFinite(convertHandler.getNum(kg), 'is not a number')
    })

    // test('Read a whole number input', () => {
    //     assert.isNumber(convertHandler.getNum(gal), 'is not a number')
    // })
});