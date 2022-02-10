const { BlogPost, PostAndCategories } = require('../../models');

const create = async (title, content, userId, categoryIds) => {
  await BlogPost.create({ title, content, userId });
  const [createdPost] = await BlogPost.findAll({ where: { title, content } });
  const postId = createdPost.dataValues.id;
  const createCategories = categoryIds.map(async (categoryId) => {
    await PostAndCategories.create({ postId, categoryId });
  });

  await createCategories;
  return { id: postId, userId, title, content };
};

module.exports = {
  create,
};