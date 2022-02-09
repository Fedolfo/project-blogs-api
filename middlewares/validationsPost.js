const Joi = require('@hapi/joi');

const schema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': '"title" is required',
  }),
  content: Joi.string().required().messages({
    'any.required': '"content" is required',
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': '"categoryIds" is required',
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
