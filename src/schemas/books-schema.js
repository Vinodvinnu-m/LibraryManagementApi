const joi = require('joi');

const bookSchema =  joi.object({
    title: joi.string().trim().required(),
    genre: joi.string().optional(),
    author: joi.string().required()
})


let booksPaginationSchema = joi.object({
    page: joi.number().required(),
    limit: joi.number().required(),
    title: joi.string().optional(),
    genre: joi.string().optional(),
    author: joi.string().optional(),
    id: joi.string().optional(),
})
module.exports = {bookSchema,booksPaginationSchema}