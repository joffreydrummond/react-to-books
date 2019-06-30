const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bookSchema = new Schema({
        title: { type: String, required: true },
        authors: { type: String, required: true },
        description: String,
        image: String,
        link: String
    }),
    Book = mongoose.model("book", bookSchema);

module.exports = Book;