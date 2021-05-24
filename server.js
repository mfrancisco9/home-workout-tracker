const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//setting port to 3000
const PORT = process.env.PORT || 3000;

const app = express();

//using logger in dev
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//establishing static folder
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
