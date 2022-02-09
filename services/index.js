const createUser = require('./users/createUser');
const loginUser = require('./users/login');
const getAllUsers = require('./users/allUsers');
const getByIdUser = require('./users/getByIdUser');

// Categories
const createCategory = require('./categories/createCategorie');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getByIdUser,
  createCategory,
};