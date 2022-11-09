const mysql = require('mysql2');
const pool = mysql.createPool({
    host : 'localhost',
    user :'root',
    database :'amit',
    password : 'root',
    // port :5857
})
module.exports = pool.promise();