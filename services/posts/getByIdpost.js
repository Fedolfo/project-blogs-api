const { BlogPost, User, Category } = require('../../models');

const findById = async (id) => {
  const [posts] = await BlogPost.findAll({
    where: {
      id,
    },
    include:
      [{
        model: User, as: 'user', attributes: { exclude: 'password' },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
      ],
  });
  return posts;
};

module.exports = {
  findById,
};