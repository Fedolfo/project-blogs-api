const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  res.status(505).json(err);
};

module.exports = {
  errorMiddleware,
};