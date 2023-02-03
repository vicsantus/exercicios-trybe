const express = require('express');
const activitiesRouter = require('./routers/activities.router');
const signUp = require('./routers/signup.router');
const app = express();

app.use(express.json());
app.use('/signup', signUp);
app.use('/activities', activitiesRouter);

module.exports = app;
