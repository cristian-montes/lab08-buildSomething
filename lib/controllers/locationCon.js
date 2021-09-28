const { Router } = require('express');
const { deleteById } = require('../models/Message');
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
      res.json(newLocation);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async(req, res, next) => {
    try {
      const theLocations = await LocationService.getStoredLocations();
      res.send(theLocations);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async(req, res, next) => {
    try {
      const theLocations = await LocationService.getStoredById(req.params.id);
      res.send(theLocations);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedLoc = await LocationService.updateStoredById(req.params.id, req.body);
      res.send(updatedLoc);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteLoc = await LocationService.deleteStoredById(req.params.id);
      res.send(deleteLoc);
    } catch (error) {
      next(error);
    }
  })
