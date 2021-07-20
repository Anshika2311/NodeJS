const http=require('http')

http.createServer(function(req,res){

    // res.end("Hello World")

    if(req.url==='/'){
        res.end("This is Home")
    }
    else if(req.url=='/users'){
        res.end("This is about users")
    }

    else if(req.url=='/games'){
        res.end("This is about games")
    }


}).listen(5000)