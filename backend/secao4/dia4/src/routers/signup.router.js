const express = require('express');
// const users = require('../files/users.json');
const fs = require('fs').promises;
const {join} = require('path')
const crypto = require('crypto');
const postKeysValidation = require('../middleware/signup/postKeysValidation');

const signUp = express.Router();

const makeToken = () => {
  return crypto.randomBytes(8).toString('hex');
}

const readUserJson = async () => {
  const path = '/files/users.json';
  try {
    const usersJson = await fs.readFile(join('./src', path), 'utf-8');
    return JSON.parse(usersJson);
  } catch (err) {
    return null;
  }
}

signUp.post('/', postKeysValidation, async (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const tokenGen = makeToken();
  const users = await readUserJson();
  console.log(users);
  users.push({
    [tokenGen]: {email, password, firstName, phone}
  })

  await fs.writeFile('./src/files/users.json', JSON.stringify(users));

  console.log(users);

  return res
    .status(200).json({ "token": `${tokenGen}` })
})

module.exports = signUp;
