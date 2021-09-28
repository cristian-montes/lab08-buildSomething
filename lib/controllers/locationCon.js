const { Router } = require('express');
// const { fetchLocationData } = require('../utils/fetchTheData');
const LocationService = require('../services/LocationService');


module.exports = Router()
  .get('/locations', async (req, res, next) => {
    try {
      const locations = await LocationService.getAllLocations();
      res.send(locations);
    } catch (error) {
      next(error);
    }
    
  })
  .post('/locations/:id', async(req, res, next) => {
    try {
      const newLocation = await LocationService.postLocation(req.params.id);
      res.send(newLocation);
    } catch (error) {
      next(error);
    }
  });
