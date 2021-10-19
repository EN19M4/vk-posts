var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
var path = require('path');

var app = express();
app.use(cors());

const Comm = require("../models/Comm.js")
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@cluster0.1a49e.mongodb.net/comm?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, './data/posts.json'));
})

app.get("/comments", function(req, res) {
    Comm.find({}, (err, result) =>{
        if (err){
            res.send(err)
        }
        res.send(result)
    })
});

app.post("/insert", async (req,res) =>{
    const name = req.body.name;
    const body = req.body.body;
    const postId = req.body.postId;
    const newComm = new Comm({name: name, body: body, postId: postId});

    try {
        await newComm.save();
        res.send("inserted data")
    } catch (error) {
        console.log(error);
    }
});

app.put("/update", async (req,res) =>{
    const name = req.body.name;
    const body = req.body.body;
    const _id = req.body._id;

    try {
         await Comm.findById(_id, (err, updatePost) =>{
            updatePost.name =  name; 
            updatePost.body =  body;
            updatePost.save();
            res.send("update")
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/read", async (req,res) =>{
    Comm.find({}, (err, result) =>{
        if (err){
            res.send(err)
        }
        res.send(result)
    })
});

app.delete("/delete/:_id", async (req,res) =>{
    const _id = req.params._id;
    await Comm.findByIdAndRemove(_id).exec();

});

app.listen(8080);