const { Category } = require('../../models');

const getById = async (id) => {
  const [findById] = await Category.findAll({ where: { id } });
  return findById;
};

module.exports = {
  getById,
};