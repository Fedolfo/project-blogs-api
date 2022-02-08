const createUser = require('./users/createUser');
const loginUser = require('./users/login');
const getAllUsers = require('./users/allUsers');
const getByIdUser = require('./users/getByIdUser');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getByIdUser,
};