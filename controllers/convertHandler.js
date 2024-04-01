function ConvertHandler() {

  this.getNum = function (input) {
    const regex = /[a-z]+$/i
    const numStr = input.replace(regex, '')
    if (numStr === '') {
      return 1
    } else if (numStr.includes('/')) {
      const numStrArr = numStr.split('/')
      return (Number(numStrArr[0]) / Number(numStrArr[1]))
    } else {
      return Number(numStr);
    }
  };

  this.getUnit = function (input) {
    const valid = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
    const regex = /[a-z]+$/i
    const lowerCase = input.match(regex)[0].toLowerCase()
    const unit = lowerCase === 'l' ? 'L' : lowerCase
    if (valid.includes(unit)) {
      return unit;
    } else {
      return new Error('Invalid unit')
    }
  };

  this.getReturnUnit = function (initUnit) { // gets new unit
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) { // gets non abbreviated unit
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) { // gets new number
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) { // puts string together 
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
