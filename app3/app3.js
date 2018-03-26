

var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'game1.cuvupigs22zy.ap-south-1.rds.amazonaws.com',
    user:'root',
    password:'0851408244ss',
    database:'Game1'
   
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
    app.get ('/user/add/user',function(req,res)
    {
        var Name = req.query.Name;
        var Pasword = req.query.Pasword;

        var user =[[Name,Pasword]];
        queryAddUser(user,function(err,result)
        {
            res.end(result);
        });
      //  res.end(Name+Pasword);
      //  http://localhost:8081/user/add/user?Name=Lolo&Pasword=5231
    });
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
putname = req.params.Name;
console.log(Name);
queryUser(function(err,result)
{
    res.end(result);
});
});
/*
app.get ('/user/Jay',function(req,res)
{
//res.end('hello');
var Name = req.params.Name;
putname = 'Jay';
console.log(Name);
queryUser(function(err,result)
{
    res.end(result);
});
});
app.get ('/user/Jack',function(req,res)
{
//res.end('hello');
var Name = req.params.Name;
putname = 'Jack';
console.log(Name);
queryUser(function(err,result)
{
    res.end(result);
});
});
app.get ('/user/Jj',function(req,res)
{
//res.end('hello');
var Name = req.params.Name;
putname = 'Jj';
console.log(Name);
queryUser(function(err,result)
{
    res.end(result);
});
});
*/
var server = app.listen (8081,function()
{
    console.log('Server: Running');
});

function queryAllUser (Callback)
{
    var json = '';
    connection.query('SELECT * FROM Game1.user',function(err ,rows,fields)
{
    if(err)throw err;
    json = JSON.stringify(rows);
    Callback(null,json);
    
});
}

function queryUser (Callback)
{
    var json = '';
    connection.query("SELECT * FROM Game1.user WHERE Name ='"+putname+"';",function(err ,rows,fields)
{
    if(err)throw err;
    json = JSON.stringify(rows);
    Callback(null,json);
    
});
}
function queryAddUser (user,Callback)
{
    var sql = 'INSERT INTO user(Name,Pasword) values ?';
    connection.query(sql,[user],
        function(err){
            var result = '[{"success":"true"}]'
            
    if(err)
    {
        var result = '[{"success":"false"}]'
        throw err;
    }
    Callback(null,null);
    
});
}