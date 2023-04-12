const db = require('../config/db');

class User_tag { 
	constructor(user_id, tag_id) { 
		this.user_id = user_id
		this.tag_id = tag_id
	}

	async save() { 
		let sql = `
		INSERT INTO User_tag(
			user_id,
			tag_id
		) 
		VALUES(
			'${this.user_id}',
			'${this.tag_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM User_tag`;
		return db.execute(sql);
	}

	static findByUserId(user_id) { 
		let sql = `SELECT * FROM User_tag WHERE user_id=${user_id}`;
		return db.execute(sql);
	}
}

module.exports = User_tag;