var express = require("express");
var app = express();
app.use(express.static("public")); //tells express to look in public dir for css
app.set("view engine", "ejs"); //eliminates need for .ejs extension in filenames
app.get("/", function(req, res)
{
    res.render("home");
    //can add HTML content into the send param
});

app.get("/love/:thing", function(req, res)
{
   var thing = req.params.thing;
   res.render("luv", {thingVar: thing});
});
//template for retrieving something from a database

app.get("/posts", function(req, res) { //posts route
    var posts = [
        {title: "Post 1", author: "MacKenz"},
        {title: "This is the second post", author: "Shiv"},
        {title: "En fin", author: "Le Shivaansh"}
        ]; //array of JS objects, which are posts
        res.render("posts", {posts: posts}); //referring to the posts array, each element is also posts
});

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("newApp running");
});