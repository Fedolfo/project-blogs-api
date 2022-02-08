require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const findEmail = async (email) => {
  const users = await User.findOne({ where: email });
  return users;
};

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    const receivedEmail = decoded.data.email;
    console.log(decoded);
    const user = await findEmail(receivedEmail);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token', error: err.message });
  }
};