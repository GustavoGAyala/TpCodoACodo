const express = require('express');
const Router = express.Router();
const {admin} = require('../controllers/admin.controller')

Router.get('/', admin);







module.exports = Router;