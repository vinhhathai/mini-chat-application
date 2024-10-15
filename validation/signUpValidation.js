'use strict';
//----------------------------------------------------------------
const Joi = require('joi').extend(require('@joi/date'));;

const signUpValidation = Joi.object({
    fullName: Joi.string().required().min(6).max(255),
    password: Joi.string().required().min(6).max(255),
    confirmPassword: Joi.string().required().min(6).max(255).valid(Joi.ref("password")),
    email: Joi.string().email().required(),
    
});

module.exports = signUpValidation;
