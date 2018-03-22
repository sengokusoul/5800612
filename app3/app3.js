
var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0851408244Ss',
    database:'game1'
   
    });
    var putname;
    
    connection.connect(function (err)
    {
        if(err){
            console.log('Error Connecting',err.stack);
            return;
        }
        console.log('Connected as id',connection.threadId);
    })

app.get ('/users',function(req,res)
{
//res.end('hello');
queryAllUser(function(err,result)
{
    res.end(result);
});
});

app.get ('/user/:Name',function(req,res)
{
//res.end('hello');
var Name = req.params.Name;
console.log(Name);
queryUser(function(err,result)
{
    res.end(result);
});
});

var server = app.listen (8081,function()
{
    console.log('Server: Running');
});

function queryAllUser (Callback)
{
    var json = '';
    connection.query('SELECT * FROM game1.user',function(err ,rows,fields)
{
    if(err)throw err;
    json = JSON.stringify(rows);
    Callback(null,json);
    
});
}

function queryUser (Callback)
{
    var json = '';
    connection.query("SELECT * FROM game1.user WHERE Name ='"+Name+"';",function(err ,rows,fields)
{
    if(err)throw err;
    json = JSON.stringify(rows);
    Callback(null,json);
    
});
}