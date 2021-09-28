const { Router } = require('express');
const  EpisodeService  = require('../services/EpisodeServices');
const { fetchEpisodeData } = require('../utils/fetchTheData');

module.exports = Router()
  .get('/episodes', async (req, res, next) => {
    try {
      const data = await EpisodeService.getAllEpisodes();
      res.send(data);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async (req, res, next) => {
    try {
      const newEpisode = await EpisodeService.postEpisode(req.params.id);
      res.json(newEpisode);
    } catch (error) {
      next(error);
    }
  });

