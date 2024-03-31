function ConvertHandler() {

  this.getNum = function (input) {
    let result;
    const regex = /[a-z]+$/i
    result = input.replace(regex, '')
    if (result === '') {
      return 1
    } else {
      return Number(result);
    }
  };

  this.getUnit = function (input) {
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) { // gets new unit
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) { // gets non abbreviated unit
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) { // gets new number?
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
