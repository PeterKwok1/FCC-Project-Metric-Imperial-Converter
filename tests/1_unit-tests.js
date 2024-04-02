const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

    suite('getNum', () => {
        test('Read a whole number input', () => {
            assert.equal(convertHandler.getNum('4'), 4, 'Can\'t read whole number')
        })
        test('Read a decimal number input', () => {
            assert.equal(convertHandler.getNum('4.5'), 4.5, 'Can\'t read decimal')
        })
        test('Read a fractional number input', () => {
            assert.equal(convertHandler.getNum('1/2'), 0.5, 'Can\'t read fraction')
        })
        test('Read a fractional decimal number input', () => {
            assert.equal(convertHandler.getNum('1.5/2'), 0.75, 'Can\'t read fractional decimal')
        })
        test('Return an error on double fraction input', () => [
            assert.instanceOf(convertHandler.getNum('8/2/2'), Error, 'Did not return error on double fraction input')
        ])
        test('Return 1 when no number is input', () => {
            assert.equal(convertHandler.getNum('kg'), 1, 'Not 1 when no number is input')
        })
    })

    suite('getUnit', () => {
        test('Read unit input', () => {
            assert.equal(convertHandler.getUnit('4L'), 'L', 'Failed to read unit')
        })
        test('Throw error for invalid unit', () => {
            assert.instanceOf(convertHandler.getUnit('gk'), Error, 'Did not throw error for invalid unit') // obj's in js are not =
        })
    })

    suite('getReturnUnit', () => {
        test('Return new unit', () => {
            assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'Did not return new unit')
        })
    })

    suite('spellOutUnit', () => {
        test('Return spelled out unit', () => {
            assert.equal(convertHandler.spellOutUnit('km'), 'kilometers', 'Did not return spelled out unit')
        })
    })

    suite('convert', () => {
        test('convert gal to L', () => {
            assert.equal(convertHandler.convert(1, 'gal'), 3.78541, 'Did not convert gal to L' )
        })
        test('convert L to gal', () => {
            assert.equal(convertHandler.convert(1, 'L'), 0.26417, 'Did not convert L to gal' )
        })
        test('convert mi to km', () => {
            assert.equal(convertHandler.convert(1, 'mi'), 1.60934, 'Did not convert mi to km' )
        })
        test('convert km to mi', () => {
            assert.equal(convertHandler.convert(1, 'km'), 0.62137, 'Did not convert km to mi' )
        })
        test('convert lbs to kg', () => {
            assert.equal(convertHandler.convert(1, 'lbs'), 0.45359, 'Did not convert lbs to kg' )
        })
        test('convert kg to lbs', () => {
            assert.equal(convertHandler.convert(1, 'kg'), 2.20462, 'Did not convert kg to lbs' )
        })
    })
});

// try {
//     throw new Error("this is an error")
//   } catch (error) {
//     console.log(error instanceof Error)
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.constructor)
//   }
  
//   class XHRError extends Error {
//     constructor(status, url = 'unknown', ...params) {
//       super(...params)
  
//       if (Error.captureStackTrace) {
//         Error.captureStackTrace(this, XHRError)
//       }
  
//       this.name = 'XHR Error'
//       this.status = status
//       this.url = url
//     }
//   }
  
//   try {
//     throw new XHRError(
//       500,
//       'ex url',
//       'ex msg'
//     )
//   } catch (error) {
//     console.log(error.name)
//     console.log(error.status)
//     console.log(error.message)
//     console.log(error.url)
//   }