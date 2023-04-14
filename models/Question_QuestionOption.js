const db = require('../config/db');

class Question_QuestionOption {
	constructor(question_id, questionOption_id) { 
		this.question_id = question_id;
		this.questionOption_id = questionOption_id;
	}

	async save() { 
		let sql = `
		INSERT INTO Question_QuestionOption(
			question_id,
			questionOption_id	
		)
		VALUES(
			'${this.question_id}',
			'${this.questionOption_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Question_QuestionOption`;
		return db.execute(sql);
	}
}