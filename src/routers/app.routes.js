let express = require("express")
let router = express.Router();

const validator = require('../middleware/validate-payload');
const authorSchema = require("../schemas/authour-schema");
let {bookSchema,booksPaginationSchema} = require('../schemas/books-schema');
let {createAuthor,ListOfAuthors} = require("../controllers/author-controller");
let {createBook,getBooks,searchBooksByAuthor,updateBook,deleteBook} = require("../controllers/books-controller")



//Create  Author apis
router.post(
    "/author/create",
    validator.validateBodyPayload(authorSchema),
    createAuthor
)

// Fetch Author List
router.get(
    "/author/list",
    ListOfAuthors
)



//Books Apis
// Create Books api
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
    "/books",
    searchBooksByAuthor
)

//Update books by Book id
router.put(
    "/books/update/:id",
    validator.validateBodyPayload(bookSchema),
    updateBook
);

//Delete book by Book id
router.delete(
    "/books/delete/:id",
    deleteBook
)

module.exports = router