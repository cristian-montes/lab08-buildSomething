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
