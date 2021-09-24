const { Router } = require('express');
const MessageService = require('../services/MessageService');

module.exports = Router()
  .get('/characters', async (req, res, next) => {
    try {
      const quote = await MessageService.getAllInfo();
      res.send(quote);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async(req, res, next) => {
    try {
      const newQuote = await MessageService.postQuote(req.params.id);
      res.send(newQuote);
    } catch (error) {
      next(error);
    }
  });
