// ######### https://www.w3schools.com/nodejs/nodejs_mysql.asp ##########

var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
// });

// SQL Query
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

// Create DataBase
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database Created");
//     });
// });

// Create Table
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "CREATE TABLE customers (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255),address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table Created");
//     });
// });

// Insert into Table
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record created");
//     });
// });

// ########################################################################################################

// Insert Multiple rows
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "INSERT INTO customers (name, address) VALUES ?";
//     let values = [
//         ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });
// });

// When executing a query, a result object is returned.

// {
//   fieldCount: 0,
//   affectedRows: 14,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '\'Records:14  Duplicated: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// } 

// example
//  console.log(result.affectedRows) 

// ########## GET ID FROM INSERTED QUERY ######### 

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted, ID: " + result.insertId);
//     });
// });

// ############################################################################################

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "SELECT * FROM customers";
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "SELECT name, address FROM customers";
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         console.log('\n')
//         console.log(result[2].address);
//     });
// });

// Callback fields Object
// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp


// ######### Where ###################


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
//     let sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


// ############################################################################
// ############################################################################
// ############################################################################
// ############################################################################
// https://www.w3schools.com/nodejs/nodejs_mysql_where.asp
//  Escaping to preven SQL Injections
let adr = 'Mountain 21';
let sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

// Also possible with the Placeholder ?
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// If you have multiple placeholders, the array contains multiple values, in that order:
// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// ############################################################################
// ############################################################################
// ############################################################################
// ############################################################################


// Delete
// con.connect(function(err) {
//   if (err) throw err;
//   let sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

// Update
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });