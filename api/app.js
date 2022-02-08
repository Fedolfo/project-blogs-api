const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validate = require('../middlewares/validations');
const auth = require('../auth/validateJWT');
const { errorMiddleware } = require('../middlewares/error');

const app = express();

app.use(bodyParser.json());
const apiRoutes = express.Router();

apiRoutes.post('/login', validate, routes.addLogin);

apiRoutes.post('/user', validate, routes.addUser);

apiRoutes.get('/user', auth, routes.allUsers);

app.use(apiRoutes);

app.use(errorMiddleware);

module.exports = app;