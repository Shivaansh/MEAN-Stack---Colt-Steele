var express = require("express"); //lots of method, so cannot exec express()
var app = express();
console.log("first express app yay!!");

//for express, use app.something()

//get request behaviour
app.get("/", function(req, res)
{
    res.send("Hi there!");
});

app.get("/bye", function(req, res)
{
    res.send("Bye");
});

app.get("/r/:subreddit". function(req, res)
{
    res.send("You have reached a subreddit");
})

app.get("*", function(req, res)
{
    res.send("Error 404: You landed on a page that doesn't yet exist.");
});



//listen request, env for environment, takes Cloud9 Port

//listen on a particular port and IP address
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Server started!");
});