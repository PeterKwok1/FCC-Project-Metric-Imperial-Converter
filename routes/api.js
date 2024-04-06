'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    console.log(1)
    if (initNum instanceof Error && initUnit instanceof Error) {
      res.json('invalid number and unit')
    } else if (initNum instanceof Error) {
      res.json('invalid number')
    } else if (initUnit instanceof Error) {
      res.json('invalid unit')
    } else {
      console.log(2)
      const returnNum = convertHandler.convert(initNum, initUnit)
      const returnUnit = convertHandler.getReturnUnit(initUnit)
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      res.json({ initNum, returnNum, returnUnit, string: toString })
    }
  })

};
