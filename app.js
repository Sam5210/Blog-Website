const express = require("express");
const bodyParser = require("body-parser");

let entries = [];
let index = 0;
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + '/node_modules/jquerykeyframes/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/entry", function(request, response){
    console.log(request.body);
    index = Number(request.body.button)
    response.render("website", {page: "entry", journalEntries: entries, index:index});
})
app.get("/compose", function(request, response){
    response.render("website", {page:"compose", journalEntries: entries});
});
app.post("/", function(request, response){
    let entry = {
        title: request.body.title,
        content: request.body.content
    }
    console.log("before: ", entry.content);
    entry.content = entry.content.replace(/\r\n|\r|\n/g,"<br/>");
    entries.push(entry);
    console.log("after: ", entry);
    response.redirect("/");
});
app.get("/", function(request, response){
    let page = "home";
    if(Object.keys(request.query).length !== 0){
        page = request.query.page;
    }
    response.render("website", {page:page, journalEntries: entries});
});
app.listen(3000);
