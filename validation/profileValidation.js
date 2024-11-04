// profileValidation.js
const Joi = require('joi').extend(require('@joi/date'));

const profileValidation = Joi.object({
  fullName: Joi.string().required(),
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required(),
});

module.exports = { profileValidation };
