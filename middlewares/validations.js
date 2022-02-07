const Joi = require('@hapi/joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.base': '"displayName" must be a string',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.invalid': '"email" must be a valid email',
    'any.required': '"email" is required',
  }),
  password: Joi.string().min(6).required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
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
