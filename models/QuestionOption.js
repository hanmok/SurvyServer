const db = require('../config/db');

class QuestionOption { 
	constructor(position, value) { 
		this.position = position;
		this.value = value;
	}

	async save() { 
		let sql = `
		INSERT INTO QuestionOption(
			position,
			value
		)
		VALUES(
			'${this.position}',
			'${this.value}'
		)`;
		return db.execute(sql);
	}

	// static findByQuestionId(question_id) { 
	// 	let sql = `SELECT * FROM QuestionOption WHERE question_id=${question_id}`;
	// 	return db.execute(sql);
	// }
}

module.exports = QuestionOption;