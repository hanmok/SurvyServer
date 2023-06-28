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

	static findById(id) {
		let sql = `SELECT * FROM user WHERE id=${id}`
		return db.execute(sql);
	}

	static login(username, password) { 
		let sql = `SELECT id FROM user WHERE username='${username} AND password='${password}';`
		return db.execute(sql);
	}
}

module.exports = User;
export {};