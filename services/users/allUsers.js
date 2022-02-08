const { User } = require('../../models');

const getAll = async () => {
  const getUsers = await User.findAll();

  return getUsers;
};

module.exports = {
  getAll,
};