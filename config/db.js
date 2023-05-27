const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bce8ef11b95d3a',
    database: 'heroku_3df4ab91447196b',
    password: 'c3fa51f1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
// const dburl = process.env.MYSQL_ADDON 
//     ||   'mysql://' + process.env.DB_USER+ ':' + process.env.DB_PASS 
//         + '@' + process.env.DB_HOST+'/' + process.env.DB_NAME
const dburl = process.env.MYSQL_ADDON || 'mysql://bce8ef11b95d3a:c3fa51f1@us-cdbr-east-06.cleardb.net/heroku_3df4ab91447196b';
// const dburl = process.env.MYSQL_ADDON || 'mysql://' + process.env.DB_USER +':' +process.env.DB_PASSWORD+ '@' +process.env.DB_HOST+'/heroku_3df4ab91447196b'
console.log(`process.env: ${process.env}`);
console.log(`try db connection to ${dburl}`);
// try db connection to mysql://bce8ef11b95d3a:c3fa51f1@us-cdbr-east-06.cleardb.net/heroku_3df4ab91447196b
module.exports = pool;
