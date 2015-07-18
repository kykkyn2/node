
var express = require("express");
var app=express();
var path = require('path');

/*Handling routes.*/

app.get('/',function(req,res){
      res.sendFile("index.html", { root: __dirname });
});

/*Run the server.*/
app.listen(58080,function(){
    console.log("Working on port 58080");
});

/*Mysql DB Connection Test*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host     : '175.126.195.188',
 	port 	 : '3306',
  	user     : 'kykkyn2',
  	password : 'qkrwjd1',
  	database : 'ss'
});


connection.query('select * from user', function(err, rows, fields) {
	console.log(err,rows,fields);
});
