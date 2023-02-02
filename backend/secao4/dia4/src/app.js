const express = require('express');
const activitiesRouter = require('./routers/activities.router');
const app = express();

app.use(express.json());
app.use('/activities', activitiesRouter);

module.exports = app;
