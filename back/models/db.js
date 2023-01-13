const mysql = require('mysql2')
const config = require('../config')["db"]
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:' ',
    database:'community'
}).promise()

module.exports = pool