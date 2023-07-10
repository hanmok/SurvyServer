const dbModel = require('../config/db');
const db = dbModel.promise();

class User { 
	username: string;
	password: string;

	constructor(username, password) { 
		this.username = username
		this.password = password
	}

	async save() { 
		let d = new Date();
		let yyyy = d.getFullYear();
		let MM = d.getMonth() + 1;
		let dd = d.getDate();
		let HH = d.getHours();
		let mm = d.getMinutes();
		let sec = d.getSeconds();
		let registeredAt = `${yyyy}-${MM}-${dd} ${HH}:${mm}:${sec}`;
		
		let sql = `
		INSERT INTO User(
			username, 
			password, 
			registeredAt
			)
		VALUES(
			'${this.username}',
			'${this.password}',
			'${registeredAt}'	
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = "SELECT * FROM user";
		return db.execute(sql);
	}

	static findByUsername(username) { 
		let sql = `SELECT * FROM user WHERE username=${username}`
		return db.execute(sql);
	}

	static findById(id) {
		let sql = `SELECT * FROM user WHERE id=${id}`
		return db.execute(sql);
	}

	// static updateAccessToken(username, accessToken) { 
	// 	let expiresAt = new Date();
	// 	expiresAt.setDate(expiresAt.getDay() + 1);

	// 	let sql = `UPDATE user SET access_token='${accessToken}, access_token_expires_at='${expiresAt} WHERE username='${username}`
	// 	return db.execute(sql);
	// }

	static login(username, password) { 
		let sql = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`
		return db.execute(sql);
	}

	static logout(username) { 
		let sql = `SELEECT * FROM user WHERE username='${username}'`
		return db.execute(sql);
	}
}

module.exports = User;
export {};
