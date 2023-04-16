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

module.exports = pool.promise();
// pool.execute(sql)
// or 
// pool.query(sql)