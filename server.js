const express = require("express"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
  

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-to-books");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server is now serving real good on PORT ${PORT}!`);
});
