// Dependencies
var express = require("express");
var app = express();
var path = require("path");

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});