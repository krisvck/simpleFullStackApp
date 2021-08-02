//This file is going to allow us to make queries to the database
//that we need to

const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

//Create a connection
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});