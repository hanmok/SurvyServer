const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
	host: process.env.DB_HOST, 
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password:process.env.DB_PASSWORD
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

const dburl = process.env.MYSQL_ADDON || 'mysql://bce8ef11b95d3a:c3fa51f1@us-cdbr-east-06.cleardb.net/heroku_3df4ab91447196b'

console.log(`db connected to ${dburl}`);

const conn = mysql.createConnection(dburl);
module.exports = conn;
// module.exports = pool.promise();

// pool.execute(sql)
// or 
// pool.query(sql)

