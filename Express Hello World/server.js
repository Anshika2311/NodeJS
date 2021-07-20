const express = require('express')

const app =  express()

app.get('/' ,function(req,res){

    res.end("This is hello world in homepage using Express JS")

})

app.listen(5000,function(){

    console.log("Connection is successfull")

})