const { addUser, addLogin, allUsers, findByIdUser } = require('./user');
const { addCategory, allCategories } = require('./category');
const { createPostCategory, allPosts, findByIdPost } = require('./post');

module.exports = {
  addUser,
  addLogin,
  allUsers,
  findByIdUser,
  addCategory,
  allCategories,
  createPostCategory,
  allPosts,
  findByIdPost,
};