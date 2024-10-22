const Joi = require('joi').extend(require('@joi/date'));;
const restorePasswordValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  otp: Joi.string().length(5).required()
});

module.exports = restorePasswordValidation;