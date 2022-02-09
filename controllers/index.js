const { addUser, addLogin, allUsers, findByIdUser } = require('./user');
const { addCategory, allCategories, createPostCategory } = require('./category');

module.exports = {
  addUser,
  addLogin,
  allUsers,
  findByIdUser,
  addCategory,
  allCategories,
  createPostCategory,
};