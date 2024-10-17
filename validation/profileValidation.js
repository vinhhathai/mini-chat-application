
const Joi = require('joi').extend(require('@joi/date'));;
const profileValidation = Joi.object({
  email: Joi.string().email().required(),
  fullname: Joi.string().required(),
});

module.exports = profileValidation;