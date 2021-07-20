const express= require('express')

var app=express()

const bodyparser= require('body-parser')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{

    res.send("This is home page API")

});

app.get('/user',(req,res)=>{

    var usernames=["Anshika","Anshi","Akhil"]
    res.send(usernames)

});

app.post('/login',(req,res)=>{

    var username=req.body.username
    var password=req.body.password

    if(username == "Anshi" && password=="Hello"){

        res.send("Login successful")
    }
    else{
        res.send("login failed")
    }

});

app.listen(5000, ()=>{
    console.log("server started")
})