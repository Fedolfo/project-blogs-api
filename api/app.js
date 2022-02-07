const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validate = require('../middlewares/validations');
// const auth = require('../middlewares/auth');
const app = express();

app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.post('/user', validate, routes.getUser.createUser);

app.use(apiRoutes);

module.exports = app;