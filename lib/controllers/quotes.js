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
  })
  .get('/', async (req, res, next) => {
    try {
      const theQuotes = await MessageService.getAllQuotes();
      res.send(theQuotes);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const theQuote = await MessageService.quotesById(req.params.id);
      res.send(theQuote);
    } catch (error) {
      next(error);
    }
  });
