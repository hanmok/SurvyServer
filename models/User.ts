const dbModel = require('../config/db');
const db = dbModel.promise();

class User { 
	username: string;
	password: string;
	isMale: number;

	constructor(username, password, isMale) { 
		this.username = username
		this.password = password
		this.isMale = isMale
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
			isMale, 
			registeredAt
			)
		VALUES(
			'${this.username}',
			'${this.password}',
			${this.isMale},
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
}

module.exports = User;
export {};