const { createPost, getByIdCategory, getAllPost, getByIdPost } = require('../services/index');

const SERVER_ERROR = 'Server error';

const createPostCategory = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  console.log('recuperando id', req.user.id);
  const userId = req.user.id;
  try {
    const validateCategoriesIds = await getByIdCategory.getById(categoryIds);

    if (!validateCategoriesIds || validateCategoriesIds.length === 0) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const createPostAndCategory = await createPost.create(title, content, userId, categoryIds);
    res.status(201).json(createPostAndCategory);
  } catch (err) {
    console.log('está caindo erro de promisse aqui?', err.message);
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

const allPosts = async (req, res) => {
  try {
    const sendAllPosts = await getAllPost.getAll();
    res.status(200).json(sendAllPosts);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

const findByIdPost = async (req, res) => {
  const { id } = req.params;
  try {
    const postId = await getByIdPost.findById(id);

    if (!postId || postId.length === 0) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(postId);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

module.exports = {
  createPostCategory,
  allPosts,
  findByIdPost,
};