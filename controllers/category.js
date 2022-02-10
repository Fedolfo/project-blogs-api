const { createCategory, getAllCategories } = require('../services/index');

const SERVER_ERROR = 'Server error';

const addCategory = async (req, res) => {
  try {
    const category = await createCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

const allCategories = async (req, res) => {
  try {
    const categories = await getAllCategories.allCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

module.exports = {
  addCategory,
  allCategories,
};