const Joi = require('@hapi/joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).messages({
    'string.base': '"displayName" must be a string',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().empty().required()
    .messages({
      'any.invalid': '"email" must be a valid email',
      'any.required': '"email" is required',
      'string.empty': '"email" is not allowed to be empty',
    }),
  password: Joi.string().min(6).empty().required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
      'string.empty': '"password" is not allowed to be empty',
    }),
  image: Joi.string(),
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
