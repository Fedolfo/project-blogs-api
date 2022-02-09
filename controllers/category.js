const { createCategory } = require('../services/index');

const SERVER_ERROR = 'Server error';

const addCategory = async (req, res) => {
  try {
    const category = await createCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

module.exports = {
  addCategory,
};