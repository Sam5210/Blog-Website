const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({dest: __dirname + './public/uploads/images'})

let entries = [{title: "Test", content:"This is a test.\nThis is a test.", img:undefined},{title: "Test", content:"This is a test.\nThis is a test.", img:undefined}];
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + '/node_modules/jquerykeyframes/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/compose", function(request, response){
    response.render("website", {page:"compose", journalEntries: entries});
});
app.post("/", upload.single('img'), function(request, response){
    let entry = {
        title: request.body.title,
        content: request.body.content,
        img: request.file
    }
    entries.push(entry);
    console.log(entry);
    response.redirect("/");
});
app.get("/", function(request, response){
    console.log(entries.length)
    response.render("website", {page:"home", journalEntries: entries});
});
app.listen(3000);
