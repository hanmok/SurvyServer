const db = require('../config/db');

class QuestionOption { 
	constructor(question_id, position, value) { 
		this.question_id = question_id;
		this.position = position;
		this.value = value;
	}

	async save() { 
		let sql = `
		INSERT INTO QuestionOption(
			question_id,
			position,
			value
		)
		VALUES(
			'${this.question_id}',
			'${this.position}',
			'${this.value}'
		)`;
		return db.execute(sql);
	}

	static findByQuestionId(question_id) { 
		let sql = `SELECT * FROM QuestionOption WHERE question_id=${question_id}`;
		return db.execute(sql);
	}
}

module.exports = QuestionOption;