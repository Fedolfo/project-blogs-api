const { User } = require('../../models');

const getById = async (id) => {
  const findById = await User.findByPk(id);
  return findById;
};

module.exports = {
  getById,
};