// Load data
const fs = require("fs");
var noteData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

// Routing

module.exports = function(app) {
    
    // Write notes to keep data
    function writeNote(notes){
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, function(err){
            if(err){
                return console.log(err);
            }
        });
    };

    // API GET request
    app.get("/api/notes", function (req,res){
        res.json(noteData);
    });

    // API POST request
    app.post("/api/notes", function (req, res){
        req.body.id = uuidv4();
        noteData.push(req.body);
        writeNote(noteData);
        // console.log(noteData);
        res.json(req.body);
    });

    // API DELETE request
    app.delete("/api/notes/:id", function (req, res){
        const id = req.param.id.toString();
        for(i=0; i < noteData.length; i++){
            // if id matches, delete note
            if(noteData[i].id == id){
                res.send(noteData[i]);
                noteData.splice(i,1);
                break;
            }
        }
        writeNote(noteData);
    });

};