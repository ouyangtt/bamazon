var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


// connection to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    database: "bamazon"
});
