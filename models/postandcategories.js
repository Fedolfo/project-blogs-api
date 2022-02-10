// referencia - VictorDizne
module.exports = (sequelize, _DataTypes) => {
  const PostCategorie = sequelize.define('PostsCategorie',
    {},
    { tablename: 'PostsCategories', timestamps: false });
  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategorie;
};