const { createCategory, getAllCategories,
  createPost, getByIdCategory } = require('../services/index');

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

const createPostCategory = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  try {
    const validateCategoriesIds = await getByIdCategory.getById(categoryIds);

    if (!validateCategoriesIds || validateCategoriesIds.length === 0) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const createPostAndCategory = await createPost.create(title, content, userId, categoryIds);
    res.status(201).json(createPostAndCategory);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

module.exports = {
  addCategory,
  allCategories,
  createPostCategory,
};