var express = require('express');
var app = express();
var fs = require('fs');

app.get('/userlist',function(req,res){
    fs.readFile(__dirname+"/"+"User.json",'utf8',function(err,data){
        console.log(data);
        res .end(data)
    })
});
var server = app.listen(8081,function(){
    console.log('server running.....');
})