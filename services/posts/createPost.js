const { BlogPost, PostAndCategories } = require('../../models');

const create = async (title, content, userId, categoryIds) => {
  console.log('create post está passando aqui? 1');
  await BlogPost.create({ title, content, userId });
  const [createdPost] = await BlogPost.findAll({ where: { title, content } });
  console.log('está respondendo o createdPost? 2', createdPost);
  const postId = createdPost.dataValues.id;
  console.log('Está pegando valor de id? 3', postId);
  const createCategories = categoryIds.forEach(async (categoryId) => {
    await PostAndCategories.create({ postId, categoryId });
  });
  console.log('está retornando um array de postId? 4', createCategories);

  await createCategories;
  return { id: postId, userId, title, content };
};

module.exports = {
  create,
};