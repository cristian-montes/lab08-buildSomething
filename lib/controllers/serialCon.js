const { Router } = require('express');
const SerialService = require('../services/SerialServices');


module.exports = Router()
  .get('/serialNumber', async (req, res, next) => {
    try {
      const serialNum = await SerialService.getAllSerialNumbers();
      res.send(serialNum);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async(req, res, next) => {
    try {
      const serialNum = await SerialService.postSerialNumber(req.params.id);
      res.send(serialNum);
    } catch (error) {
      next(error);
    }  
  });