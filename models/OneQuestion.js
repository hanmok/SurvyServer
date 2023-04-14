const db = require('../config/db');

class OneQuestion { 
	created_at;
	ended_at;
	constructor(user_id, questionType_id, text, reward) { 
		this.user_id = user_id
		this.questionType_id = questionType_id;
		this.text = text;
		this.reward = reward;
	}

	async save() { 
		let sql = `
		INSERT INTO OneQuestion(
			user_id,
			questionType_id,
			text,
			reward
			)
		VALUES(
			${this.user_id},
			${this.questionType_id},
			'${this.text}',
			${this.reward}
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = "SELECT * FROM OneQuestion";
		return db.execute(sql);
	}

	static findById(id) {
		let sql = `SELECT * FROM OneQuestion WHERE id=${id}`
		return db.execute(sql);
	}
}

module.exports = OneQuestion;