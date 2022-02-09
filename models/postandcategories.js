// referencia - VictorDizne
module.exports = (sequelize, _DataTypes) => {
  const PostAndCategories = sequelize.define('PostAndCategories',
    {},
    { tablename: 'PostAndCategories', timestamps: false });
  PostAndCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostAndCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostAndCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostAndCategories;
};