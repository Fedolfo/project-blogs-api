const { Category } = require('../../models');

const allCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  allCategories,
};