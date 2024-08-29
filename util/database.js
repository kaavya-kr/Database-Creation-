const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'nodejs@novizco',
    database:'main'
})

module.exports=pool.promise();