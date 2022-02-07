const User = require('../services/registerUser/user');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    if (user.message) {
      return res.status(user.code).json({ message: user.message });
    }

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'server error', error: err.message });
  }
};

module.exports = {
  createUser,
};