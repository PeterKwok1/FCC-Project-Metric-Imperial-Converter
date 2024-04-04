'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      res.json('invalid number and unit')
    } else if (initNum = "invalid number") {
      res.json('invalid number')
    } else if (initUnit = 'invalid unit') {
      res.json('invalid unit')
    } else {
      const returnNum = convertHandler.convert(initNum, initUnit)
      const returnUnit = convertHandler.getReturnUnit
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      res.json({ initNum, returnNum, returnUnit, string: toString })
    }
  })

};
