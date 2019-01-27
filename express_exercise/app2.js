var express = require("express");
var app = express();

app.get("/", function(req, res)
{
    res.send("Hi there, welcome to my assignment!");
});

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("app running");
});

app.get("/speak/pig", function(req, res)
{
    res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res)
{
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res)
{
    res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/:word/:number", function(req, res)
{
    var term = req.params.word;
    var count = req.params.number;
    var str = "";
    for(var i = 1; i <= count; i++)
    {
        str += term + " ";
    }
    res.send(str);
});

app.get("*", function(req, res)
{
    res.send("What are you doing with your life?");
});