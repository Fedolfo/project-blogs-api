const errorMiddleware = (err, _req, res, _next) => {
  res.status(500).json(err);
};

module.exports = {
  errorMiddleware,
};