//Require the npm modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const sharp = require("sharp");
// const picsee = require("picsee");
const sizeOf = require("buffer-image-size");
const multer = require("multer");
const sharp = require("sharp");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//Connect Mongoose
// mongoose.connect("mongodb+srv://JBHSS:Orient2020!@cluster0.zcndj.mongodb.net/Blog", {useNewUrlParser: true});
mongoose.connect("mongodb://localhost:27017/Blog", {useNewUrlParser: true});

//Entry schema setup
const entrySchema = new mongoose.Schema ({
    title: String,
    content: String,
    img:{
        data: [Buffer],
        contentType: [String],
    }
});
const Entry = mongoose.model("Entry", entrySchema);

//Set up app, use ejs, upload files into public through express,
//add keyframe, set up body parser
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + '/node_modules/jquerykeyframes/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

//Declare variables for the blog
const defaultEntry = new Entry ({title: "Test", content: "This is a test."});
const defaultEntries = [defaultEntry, defaultEntry, defaultEntry];
const maxImageCount = 5;

//App posts and gets
app.post("/entry", function(request, response){
    Entry.findOne({_id: request.body._id}, function(error, entry){
        if(error){
            console.log(error);
        }
        else{
            response.render("website", {
                page: "entry", 
                journalEntries: [],
                entry: entry
            });
        }
    });
})

app.get("/compose", function(request, response){
    response.render("website", {page:"compose", journalEntries : [], maxImageCount: maxImageCount});
});

app.post("/", upload.array("img", maxImageCount),function(request, response){
    // const imageCount = request.body.maxImageCount;
    // let content = request.body.content; content = content.replace(/\r\n|\r|\n/g,"<br/>");
    console.log(request.body);
    console.log(request.files);
    let entry = new Entry ({
        title: request.body.title, 
        content: request.body.content
    });
    let save = async function(){
        // const maxImageWidth = 1020;
        const maxImageWidth = 400;
        await request.files.forEach(function(file){
            entry.img.contentType.push(file.mimetype);
            let fileDimensions = sizeOf(file.buffer);
            let Resize = async function(){
                if(fileDimensions.width > maxImageWidth){
                    let aspectRatio = fileDimensions.width / fileDimensions.height;
                    let newWidth = maxImageWidth;
                    let newHeight = Math.round(maxImageWidth / aspectRatio);
                    await sharp(file.buffer)
                            .resize(newWidth, newHeight)
                            .toBuffer(function(error, data, info){
                                if(error){console.log(error);}
                                else{
                                    entry.img.data.push(Buffer.from(data.buffer));
                                    entry.save();
                                }
                            });
                }
                else{
                    entry.img.data.push(file.buffer);
                    entry.save();
                }
            }
            Resize();
        });
        response.redirect("/");
    }
    save();
});
app.get("/", function(request, response){
    let page = "home";
    if(Object.keys(request.query).length !== 0){
        page = request.query.page;
    }
    Entry.find({}, function(error, entries){
        if(error){
            console.log(error);
        }
        else{
            if(entries.length == 0){
                response.render("website", {page:page, journalEntries: defaultEntries});
            }
            else{
                response.render("website", {page:page, journalEntries: entries});
            }

        }
    })
});

//App listen
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}
app.listen(port);
