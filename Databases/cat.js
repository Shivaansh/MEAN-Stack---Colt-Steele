var mongoose = require("mongoose");

//connect to database, need mongod running
mongoose.connect("mongodb://localhost:27017/cat_app",{useNewUrlParser: true}); //27017 is port number retrieved from mongod
//will create cat_app if it doesn't already exist

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
//schema for a cat, NOT a data entry

var Cat = mongoose.model("Cat", catSchema); //compiling schema to a model
Cat.create(); //should be singular version of collection name
//we now use Cat as a model to call method like insert, remove, update. eg Cat.remove({queryObject})

//add a new cat to the db

//1 create a cat
var george = new Cat({name: "Georgia", 
        age: 7, 
        temperament: "calm"
});

//2 save a cat
george.save(function(err, cat)//err: potential error, cat: the data being stored in DB  
{
    if(err)
    {
        console.log("Something wrong");
    }
    else{
        console.log(cat + " saved to database")
    }
}); //saving like this blindly might result in failure due to non connectivity to db. pass a callback fn

//retrieve all cats from db, console log each
 Cat.find({}, function(err, cats)
 {
     if(err)
     {
         console.log(err);
         console.log("there was an error!");
     }else
     {
         console.log("here are the cats");
         console.log(cats);
     }
 });