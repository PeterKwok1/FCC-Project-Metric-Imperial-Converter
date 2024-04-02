function ConvertHandler() {

  this.getNum = function (input) {
    const regex = /[a-z]+$/i
    const numStr = input.replace(regex, '')
    if (numStr === '') {
      return 1
    } else if (numStr.includes('/')) {
      if (numStr.match(/\//g).length > 1) {
        return new Error('Invalid number')
      }
      const numStrArr = numStr.split('/')
      return (Number(numStrArr[0]) / Number(numStrArr[1]))
    } else {
      return Number(numStr)
    }
  };

  this.getUnit = function (input) {
    const valid = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
    const regex = /[a-z]+$/i
    const lowerCase = input.match(regex)[0].toLowerCase()
    const unit = lowerCase === 'l' ? 'L' : lowerCase
    if (valid.includes(unit)) {
      return unit
    } else {
      return new Error('Invalid unit')
    }
  };

  this.getReturnUnit = function (initUnit) { // gets new unit
    const key = { mi: 'km', lbs: 'kg', gal: 'L', km: 'mi', kg: 'lbs', L: 'gal' }

    return key[initUnit]
  };

  this.spellOutUnit = function (unit) { // gets non abbreviated unit
    const key = { mi: 'miles', km: 'kilometers', gal: 'gallons', L: 'liters', lbs: 'pounds', kg: 'kilograms' }

    return key[unit];
  };

  this.convert = function (initNum, initUnit) { // gets new number
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let converted

    if (initUnit === 'gal') {
      converted = initNum * galToL
    } else if (initUnit === 'L') {
      converted = initNum / galToL
    } else if (initUnit === 'lbs') {
      converted = initNum * lbsToKg
    } else if (initUnit === 'kg') {
      converted = initNum / lbsToKg
    } else if (initUnit === 'mi') {
      converted = initNum * miToKm
    } else if (initUnit === 'km') {
      converted = initNum / miToKm
    }

    return Math.round(converted * 100000) / 100000
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) { // puts string together 
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };

}

module.exports = ConvertHandler;
