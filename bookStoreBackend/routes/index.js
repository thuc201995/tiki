var express = require("express");
var router = express.Router();

const bookController = require("../controllers/book");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/books", bookController.listBook);
router.get("/books/:bookId", bookController.getBook);
router.post("/books", bookController.createBook);
router.patch("/books/:bookId", bookController.updateBook);
router.delete("/books/:bookId", bookController.deleteBook);

module.exports = router;
