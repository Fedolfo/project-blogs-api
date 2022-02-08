require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createUser, loginUser } = require('../services/index');

const addUser = async (req, res) => {
  try {
    const user = await createUser.create(req.body);

    if (user.message) {
      return res.status(user.code).json({ message: user.message });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'server error', error: err.message });
  }
};

const addLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginUser.login({ email, password });

    if (login.message) {
      return res.status(login.code).json({ message: login.message });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: login }, process.env.JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'server error', error: err.message });
  }
};

module.exports = {
  addUser,
  addLogin,
};