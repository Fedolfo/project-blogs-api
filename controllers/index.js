const { addUser, addLogin, allUsers, findByIdUser } = require('./user');
const { addCategory, allCategories } = require('./category');

module.exports = {
  addUser,
  addLogin,
  allUsers,
  findByIdUser,
  addCategory,
  allCategories,
};