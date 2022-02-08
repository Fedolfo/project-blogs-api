const { User } = require('../../models');

const login = async ({ email, password }) => {
  const user = await User.findAll({ where: { email, password } });
  if (user.length === 0) {
    return { code: 400, message: 'Invalid fields' };
  }
  return user;
};

module.exports = {
  login,
};