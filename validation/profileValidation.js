
const Joi = require('joi').extend(require('@joi/date'));;
const profileValidation = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid('male', 'female', 'other').optional(),
  birthday: Joi.date().optional()
});

module.exports = profileValidation;