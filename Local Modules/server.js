const http = require('http')
const dbinfo=require('./dbinfo')

http.createServer(function(req,res){

    if(req.url==='/')
    {
        res.end("The database username is :- "+dbinfo.username)
        
    }

    if(req.url==='./password')
    {
        res.end("The database password is :- "+dbinfo.password)
    }

}).listen(5000);