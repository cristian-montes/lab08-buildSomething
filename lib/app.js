const express = require('express');
const notFoundMiddleware = require ('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error.js');

const app = express();

app.use(express.json());

app.use('/api/v1/quotesmsg', require('./controllers/quotes'));
app.use('/api/v1/locationmesa', require('./controllers/locationCon'));
app.use('/api/v1/episodename', require('./controllers/episodeCon'));
app.use('/api/v1/airdate', require('./controllers/airCon'));
app.use('/api/v1/episerialnumber', require('./controllers/serialCon'));



app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
