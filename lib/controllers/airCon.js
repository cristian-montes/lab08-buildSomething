const { Router } = require('express');
const AirService = require('../services/AirServices');


module.exports = Router()
  .get('/dates', async (req, res, next) => {
    try {
      const dates = await AirService.getAllAirDates();
      res.send(dates);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async(req, res, next) => {
    try {
      const airDate = await AirService.postAirDate(req.params.id);
      res.send(airDate);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async(req, res, next) => {
    try {
      const theAirDates = await AirService.getAllStoredAirDates();
      res.send(theAirDates);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async(req, res, next) => {
    try {
      const airDate = await AirService.getStoredAirDateById(req.params.id);
      res.send(airDate);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedAirDate = await AirService.updateStoredAirDate(req.params.id, req.body);
      res.send(updatedAirDate);
    } catch (error) {
      next(error);
      
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleted = await AirService.deleteStoredAirDate(req.params.id);
      res.send(deleted);
    } catch (error) {
      next(error);
    }
  });

