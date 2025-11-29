let express = require("express")
let router = express.Router();

const validator = require('../middleware/validate-payload');
const authorSchema = require("../schemas/authour-schema");
let {bookSchema,booksPaginationSchema} = require('../schemas/books-schema');
let {createAuthor,ListOfAuthors} = require("../controllers/author-controller");
let {createBook,getBooks,searchBooksByAuthor,updateBook,deleteBook} = require("../controllers/books-controller")



// Author apis
router.post(
    "/author/create",
    validator.validateBodyPayload(authorSchema),
    createAuthor
)
router.get(
    "/author/list",
    ListOfAuthors
)



//Books Apis
router.post(
    "/books/create",
    validator.validateBodyPayload(bookSchema),
    createBook
);

// fetch Total books data by pagination
router.get(
    "/books/list",
    validator.validateQueryPayload(booksPaginationSchema),
    getBooks
)

//search Books by Author name
router.get(
    "/book",
    searchBooksByAuthor
)

//Update books by Book id
router.put(
    "/book/update/:id",
    validator.validateBodyPayload(bookSchema),
    updateBook
);

//Delete book by Book id
router.delete(
    "/book/delete/:id",
    deleteBook
)

module.exports = router