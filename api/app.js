const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validateUser = require('../middlewares/validationsUser');
const validateCategory = require('../middlewares/validationsCategory');
const validatePost = require('../middlewares/validationsPost');

const auth = require('../auth/validateJWT');
const { errorMiddleware } = require('../middlewares/error');

const app = express();

app.use(bodyParser.json());
const apiRoutes = express.Router();

apiRoutes.post('/login', validateUser, routes.addLogin);

apiRoutes.post('/user', validateUser, routes.addUser);

apiRoutes.get('/user', auth, routes.allUsers);

apiRoutes.get('/user/:id', auth, routes.findByIdUser);

apiRoutes.post('/categories', validateCategory, auth, routes.addCategory);

apiRoutes.get('/categories', auth, routes.allCategories);

apiRoutes.post('/post', validatePost, auth, routes.createPostCategory);

apiRoutes.get('/post', auth, routes.allPosts);

apiRoutes.get('/post/:id', auth, routes.findByIdPost);

app.use(apiRoutes);

app.use(errorMiddleware);

module.exports = app;