const db = require('../config/db');

class Answer { 
	// correctAnswer; // 지금 처리하기 애매함.. 
	constructor(question_id, user_id, questionOption_id, answer_text, timeTookInSec) { 
		this.question_id = question_id;
		this.user_id = user_id;
		this.answer_text = answer_text;
		this.timeTookInSec = timeTookInSec;
	}

	async save() {
		let sql = `
		INSERT INTO Answer(
			question_id,
			user_id,
			answer_text,
			timeTookInSec
		)
		VALUES(
			${this.question_id},
			${this.user_id},
			'${this.answer_text}',
			${this.timeTookInSec}
		)`;
		return db.execute(sql);
	}

	static findById(id) { 
		let sql = `SELECT * FROM Answer WHERE id=${id}`;
		return db.execute(sql);
	}
}

module.exports = Answer