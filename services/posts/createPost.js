const { BlogPost, PostCategorie } = require('../../models');

const create = async (title, content, userId, categoryIds) => {
  await BlogPost.create({ title, content, userId });
  const [createdPost] = await BlogPost.findAll({ where: { title, content } });
  const postId = createdPost.dataValues.id;
  await categoryIds.forEach((categoryId) => {
    PostCategorie.create({ postId, categoryId });
  });

  return { id: postId, userId, title, content };
};

module.exports = {
  create,
};