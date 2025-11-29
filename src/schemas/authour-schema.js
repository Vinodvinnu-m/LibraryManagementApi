const joi = require('joi');

const AuthorSchema =  joi.object({
    name: joi.string().trim().required(),
    bio: joi.string().optional(),
    age: joi.number().optional()
})


module.exports = AuthorSchema