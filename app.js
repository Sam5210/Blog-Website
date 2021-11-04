const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + '/node_modules/jquerykeyframes/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
    response.render("design");
});
app.listen(3000);
