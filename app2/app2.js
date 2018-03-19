
var mysql = require('mysql');
var connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'0851408244Ss',
database:'game1'
});

connection.connect(function (err)
{
    if(err){
        console.log('Error Connecting',err.stack);
        return;
    }
    console.log('Connected as id',connection.threadId);
})
/*
connection.query('SELECT * FROM game1.user',function(err ,rows,fields)
{
    if(err)throw err;
    for(var i in rows){
        console .log ('user: ',rows[i].Name);
        console .log ('score: ',rows[i].Score);
    }
})*/
var values = {Name:'Jj',Password:'78952',Score:1122 };
connection.query('INSERT INTO user SET?',values,function(err ,result)
{
if(err)throw err;
console.log(result);
})
connection.end(function err()
{
    console.log('Terminated Connection');
})
console.log('App2: test mysql : running');