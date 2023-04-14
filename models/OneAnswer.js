const db = require('../config/db');

class OneAnswer { 
	constructor(user_id, oneQuestion_id, answer_text) { 
		this.user_id = user_id;
		this.oneQuestion_id = oneQuestion_id;
		this.answer_text = answer_text;
	}

	async save() { 
		
		let sql = `
		INSERT INTO OneAnswer(
			user_id,
			oneQuestion_id,
			answer_text
			)
		VALUES(
			'${this.user_id}',
			'${this.oneQuestion_id}',
			'${this.answer_text}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = "SELECT * FROM OneAnswer";
		return db.execute(sql);
	}

	static findById(id) {
		let sql = `SELECT * FROM OneAnswer WHERE id=${id}`
		return db.execute(sql);
	}
}

module.exports = OneAnswer;