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
      const allEpisodes = await EpisodeService.getStoredEpisodes();
      res.send(allEpisodes);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const episode =  await EpisodeService.getStoredEpisodeById(req.params.id);
      res.send(episode);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const upEpisode = await EpisodeService.updateStoredEpisode(req.params.id, req.body);
      res.send(upEpisode);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteEpisode = await EpisodeService.deleteStoredEpisode(req.params.id);
      res.send(deleteEpisode);
    } catch (error) {
      next(error);
    }
  });

