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
  })
  .get('/', async (req, res, next) => {
    try {
      const serialNumbers = await SerialService.getStoredSerialNumbers();
      res.send(serialNumbers);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const theQuote = await SerialService.getStoredSerialNumberById(req.params.id);
      res.send(theQuote);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedQuote = await SerialService.updatesStoredSerialNumberById(req.params.id, req.body);
      res.send(updatedQuote);
    } catch (error) {
      next(error);
      
    }
  });
