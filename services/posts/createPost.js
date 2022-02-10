const { BlogPost, PostsCategories } = require('../../models');

const create = async (title, content, userId, categoryIds) => {
  const createBlogPost = await BlogPost.create({ title, content, userId });
  const postId = createBlogPost.dataValues.id;

  await categoryIds.forEach((categoryId) => {
    PostsCategories.create({ postId, categoryId });
  });
  return { id: postId, userId, title, content };
};

module.exports = {
  create,
};