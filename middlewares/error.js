const errorMiddleware = (err, _req, res, _next) => {
  console.log(err.message);
  res.status(500).json(err);
};

module.exports = {
  errorMiddleware,
};