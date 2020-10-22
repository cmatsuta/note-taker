// Dependencies

var path = require("path");

// Routing

module.exports = function(app) {
    //HTML GET request
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    // has to be the last
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    
};