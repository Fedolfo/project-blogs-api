const { User } = require('../../models');

const create = async ({ displayName, email, password, image }) => {
  const alreadyExists = await User.findOne({ where: { email }, raw: true });

  if (alreadyExists) {
    return { code: 409, message: 'User already registered' };
  }

  const createUsers = User.create({ displayName, email, password, image }, { raw: true });

  return createUsers;
};

module.exports = {
  create,
};