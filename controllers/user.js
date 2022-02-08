require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createUser, loginUser, getAllUsers, getByIdUser } = require('../services/index');

const SERVER_ERROR = 'Server error';

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
    const { email } = user;
    const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
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

    const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

const allUsers = async (_req, res) => {
  try {
    const users = await getAllUsers.getAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

const findByIdUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await getByIdUser.getById(id);

    if (!userId) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(200).json(userId);
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR, error: err.message });
  }
};

module.exports = {
  addUser,
  addLogin,
  allUsers,
  findByIdUser,
};