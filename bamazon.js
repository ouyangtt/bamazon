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


var customer = function() {
    connection.query('SELECT * FROM products', function(err, res) {
// Create a CLI table
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });

        console.log("Products in stock: ");
        console.log("===========================================");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(table.toString());
// Inquirering user input
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "Please type in the ID number.",
   
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
       
        }]).then(function(answer) {
            var chosenId = answer.itemId - 1
            var chosenProduct = res[chosenId]
            var chosenQuantity = answer.Quantity

            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenId].product_name + " is: " + res[chosenId].price * chosenQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[chosenId].stock_quantity - chosenQuantity
                }, {
                    id: res[chosenId].id
                }], function(err, res) {
                    customer();
                });

            } else {
                console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].stock_quantity + " in our Inventory.");
                customer();
            }
        })
    })
}


customer();