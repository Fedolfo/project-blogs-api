const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
});

module.exports = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    let code;

    if (error.message) code = 400;

    const err = { message: error.message };

    return res.status(code).json({ ...err });
  }

  next();
};
