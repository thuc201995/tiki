const Book = require("../models/book");
const logger = require("../untils/logger");

const listBook = (req, res) => {
  Book.find({})
    .then(Books => {
      res.json(Books);
    })
    .catch(err => {
      logger.error(err);
      res.status(422).send(err.errors);
    });
};

const getBook = (req, res) => {
  Book.findById(req.params.bookId)
    .then(Book => {
      res.json(Book);
    })
    .catch(err => {
      logger.error(err);
      res.status(422).send(err.errors);
    });
};

const createBook = (req, res) => {
  const newBook = new Book(req.body);
  newBook.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newBook);
  });
};

const updateBook = (req, res) => {
  if (req.body._id) {
    delete req.body._id;
  }
  Book.findOneAndUpdate(
    req.params.BookId,
    {
      ...req.body
    },
    { runValidators: true },
    (e, raw) => {
      if (e) {
        res.status(400).send(e);
      }
      res.send(raw);
    }
  );
};

const deleteBook = (req, res) => {
  Book.findOneAndDelete(req.params.BookId, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Book successfully deleted"
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  listBook,
  getBook,
  createBook,
  deleteBook,
  updateBook
};
