const createUser = require('./users/createUser');
const loginUser = require('./users/login');
const getAllUsers = require('./users/allUsers');
const getByIdUser = require('./users/getByIdUser');

// Categories
const createCategory = require('./categories/createCategorie');
const getAllCategories = require('./categories/allCategories');
const getByIdCategory = require('./categories/getByidCategories');

// posts
const createPost = require('./posts/createPost');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getByIdUser,
  createCategory,
  getAllCategories,
  createPost,
  getByIdCategory,
};