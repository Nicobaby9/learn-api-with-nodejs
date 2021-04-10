const mysql = require("mysql");

//CONNECT TO DB
const conn = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "",
    database: "crud_api_nodejs" 
});

conn.connect({err} => {
    if(err) throw err;
    console.log('Connected to DB');
});

module.exports = conn;