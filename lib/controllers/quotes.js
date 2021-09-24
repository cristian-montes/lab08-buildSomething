const { Router } = require('express');
const MessageService = require('../services/MessageService');

module.exports = Router()
  .get('/character/:id', async (req, res, next) => {
    try {
      const quote = await MessageService.createQuote(req.params.id);
      res.send(quote);
    } catch (error) {
      next(error);
    }

  });
