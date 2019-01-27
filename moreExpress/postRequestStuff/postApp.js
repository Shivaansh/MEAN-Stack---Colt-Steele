var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = ["Joey", "Chandler", "Ross", "Phoebe", "Monica"];
//will be a database later


//routes
app.get("/", function(req, res)
{
    res.render("home");
});

app.get("/friends", function(req, res)
{  
    res.render("friends", {friendName : friends});
});

//post 
app.post("/addfriend", function(req, res)
{
    var newBud = req.body.newfriend;
    friends.push(newBud);
    res.redirect("/friends");
});
//listener
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Post app connected!");
});