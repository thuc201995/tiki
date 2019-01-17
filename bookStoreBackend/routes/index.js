const express = require("express");
const router = express.Router();
const cors = require("cors");
const bookController = require("../controllers/book");
const bodyParser = require("body-parser");
router.use(cors());
router.use(bodyParser.json());

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
