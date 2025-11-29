const Book = require('../models/books-model');
const Author = require('../models/author-model');

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
    return res.status(200).send({ message: "Book updated successfully", data: booksData });
    }
};

exports.getBooks = async (req, res) => {
    try {

        let { title, genre, id, author, page = 1, limit = 10 } = req.query
        let obj = {}

        if (title) {
            obj["title"] = title
        }
        if (author) {
            obj["author"] = author
        }
        if (genre) {
            obj["genre"] = genre
        }
        if (id) {
            obj["_id"] = id
        }
        const booksData = await Book.find(obj)
            .populate('author')
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        return res.status(200).send({ message: "Book updated successfully", data: booksData })

    } catch (err) {
        res.status(400).send({ error: err.message });
    }

};

exports.searchBooksByAuthor = async (req, res) => {
    try {

        const { authorName } = req.query;
        const author = await Author.findOne({ name: new RegExp(authorName, 'i') });

        if (!author) return res.status(404).json({ message: 'Author not found' });

        const booksData = await Book.find({ author: author._id }).populate('author');
        return res.status(200).send({ message: "Book updated successfully", data: booksData })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send({ message: 'Book not found', data: null });

        Object.assign(book, req.body);
        await book.save();
        return res.status(200).send({ message: "Book data updated successfully", data: book })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {

        let findBookAndDelete = await Book.findByIdAndDelete(req.params.id);        
        return res.status(200).send({ message: "Book data deleted successfully", data: findBookAndDelete })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};
