const express = require('express');
const Router = express.Router();
const {shop} = require('../controllers/shop.controller')

Router.get('/', shop);

module.exports = Router;