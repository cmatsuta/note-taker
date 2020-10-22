// Load data
const fs = require("fs");
var noteData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

// Routing

module.exports = function(app) {

    // API GET request
    app.get("/api/notes", function (req,res){
        res.json(noteData);
    });

    // API POST request
    app.post("/api/notes", function (req, res){
        req.body.id = uuidv4();
        noteData.push(req.body);
        fs.writeFileSync("../db/db.json", JSON.stringify(noteData), "utf8");
        res.json(true);
    });

    // API DELETE request
    // app.delete("/api/notes/:id", function (req, res){
    //     const noteFilter = noteData.filter( => {
    //         return noteFilter.id === req.params.id;
    //     })

    // });


};