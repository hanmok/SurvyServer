const db = require('../config/db');

class User { 
	username: string;
	password: string;
	age: number;
	isMale: number;
	constructor(username, password, age, isMale) { 
		this.username = username
		this.password = password
		this.age = age
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
		console.log(`post user input, ${this.username}, ${this.password}, ${this.age}, ${this.isMale}}`)
		
		let sql = `
		INSERT INTO User(
			username, 
			password, 
			age, 
			isMale, 
			registeredAt
			)
		VALUES(
			'${this.username}',
			'${this.password}',
			${this.age},
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