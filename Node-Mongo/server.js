const express = require("express");
const App=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/sports',{useNewUrlParser: true, useUnifiedTopology: true},function(error){

    if(error){
        console.log(error)
    }else{
        console.log("MongoDB Connection Successfull")
    }

})

const GameModel = mongoose.model('games',{
    name:String, country:String, player:String
})

// App.get('/',(req,res)=>{

//     res.send("This is home page")

// })

App.post('/addgame',(req,res)=>{

    var name = req.body.name
    var country=req.body.country
    var player=req.body.player

    var newgame= new GameModel({name:name,country:country,player:player})

    newgame.save(function(err){

        if(err){
            res.send("Adding game failed")
        }else{
            res.send("Game Added Successfully")
        }

    })

});

App.post('/deletegame',(req,res)=>{

    GameModel.findOneAndDelete({

        name:req.body.name

    },function(err){

        if(err){
            res.send("Deleting document failed")
        }
        else{
            res.send("Deleete docuemnt successfully")
        }

    })

});

App.post('/getgames',(req,res)=>{

    GameModel.find({},function(err,documents){

        if(err){
            res.send("Something went wrong")
        }
        else{
            res.send(documents)
        }

    })

});

App.post('/updategames',(req,res)=>{


    GameModel.findOneAndUpdate({

        name:req.body.name

    },{

        player:"Dhoni"

    },function(err){

        if(err){
            res.send("Updating document failed")
        }
        else{
            res.send("Document updation successfull")
        }
    })

})

App.listen(5000,()=>{

    console.log("Start server")
})