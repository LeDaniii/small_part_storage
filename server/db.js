const express = require('express');
const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

let app = express();

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'small_part_storage'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
});