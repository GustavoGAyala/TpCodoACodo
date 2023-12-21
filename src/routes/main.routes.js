const express = require('express');
const Router = express.Router();
const {home} = require('../controllers/main.controller')

Router.get('/', home);

module.exports = Router;



