const { Router } = require('express');
const  EpisodeService  = require('../services/EpisodeServices');

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
  })
  .get('/', async (req, res, next) => {
    try {
      const allEpisodes = EpisodeService.getStoredEpisodes();
      res.send(allEpisodes);
    } catch (error) {
      next(error);
    }
  });

