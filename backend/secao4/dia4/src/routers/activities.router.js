const express = require('express');
const data = require('../files/data.json');
const keyCreatedAt = require('../middleware/description/keyCreatedAt');
const postKeydescription = require('../middleware/postKeyDescription');
const postKeyName = require('../middleware/postKeyName');
const postKeyPrice = require('../middleware/postKeyPrice');

const activitiesRouter = express.Router();

activitiesRouter.get('/', (req, res) => {
  res.status(201).json({data})
})

activitiesRouter.post('/', postKeyName, postKeyPrice, postKeydescription, keyCreatedAt, (req, res) => {
  const activit = req.body;
  data.push(activit);
  return res.status(201).json({ message: "Atividade cadastrada com sucesso!" })
})

module.exports = activitiesRouter;
