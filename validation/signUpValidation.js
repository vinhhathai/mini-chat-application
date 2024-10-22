'use strict';
//----------------------------------------------------------------
const Joi = require('joi').extend(require('@joi/date'));;

const signUpValidation = Joi.object({
    password: Joi.string().required().min(6).max(255),
    confirmPassword: Joi.string().required().min(6).max(255).valid(Joi.ref("password")),
    fullName: Joi.string().required().min(6).max(255),
    email: Joi.string().email().required(),
    
});

module.exports = signUpValidation;
