const express = require("express");
const mysql = require("mysql");
const bodyParser= require("body-parser");
const app = express();
const port = "2907";
//app.use(bodyParser.json());


/*MySql connection*/
var mysqlConnection  = require('express-myconnection');
app.set('view engine', 'ejs');

dbOptions = {
    host     : 'localhost',
    user     : 'root',
    password : 'b3b3l3m3+',
    database : 'nobelist',
    port: 3306,
 };
//mysql = require('mysql');

app.use(
    
    mysqlConnection(mysql,dbOptions,'request')
    
    );


app.use(bodyParser.urlencoded({ extended: false }));

require("./app/routes")(app,{});


app.listen(port,function(){
    console.log(port + " Numaralı portta dinlemedeyim");
    });

