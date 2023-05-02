const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});
// let sql = "SELECT * FROM posts";
// pool.execute(sql, function(err, result) { 
// 	if (err) throw err;
// 	result.forEach(res => { 
// 		console.log(res.title);
// 	})
// 	console.log(result);
// });
// const dburl = process.env.MYSQL_ADDON 
//     ||   'mysql://' + process.env.DB_USER+ ':' + process.env.DB_PASS 
//         + '@' + process.env.DB_HOST+'/' + process.env.DB_NAME
const dburl = process.env.MYSQL_ADDON || 'mysql://bce8ef11b95d3a:c3fa51f1@us-cdbr-east-06.cleardb.net/heroku_3df4ab91447196b';
// const dburl = process.env.MYSQL_ADDON || 'mysql://' + process.env.DB_USER +':' +process.env.DB_PASSWORD+ '@' +process.env.DB_HOST+'/heroku_3df4ab91447196b'
console.log(`process.env: ${process.env}`);
console.log(`try db connection to ${dburl}`);
const db = mysql.createConnection(dburl);
function handleDisconnect() {
    db.connect(function (err) {
        if (err) {
            // console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    db.on('error', function (err) {
        //   console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            return handleDisconnect();
        }
        else {
            throw err;
        }
    });
}
handleDisconnect();
module.exports = db.promise();
// module.exports = pool.promise();
// pool.execute(sql)
// or 
// pool.query(sql)
