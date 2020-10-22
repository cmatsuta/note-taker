// Require the Express
var express = require('express');
var htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")

// Create an express server.
var app = express();

// Set an initial port.
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
// Point the server to a series of route files .

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
app.use("/api",apiRoutes)
app.use("/",htmlRoutes)

// LISTENER
// Listen on port.

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
