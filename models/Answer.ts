const dbModel = require('../config/db');
const db = dbModel.promise();

class Answer { 
	question_id: number;
	user_id: number;
	selectableOption_id: number;
	textAnswer: string;
	timeTookInSec: string;

	// correctAnswer; // 지금 처리하기 애매함.. 
	constructor(question_id, user_id, selectableOption_id, textAnswer, timeTookInSec) { 
		this.question_id = question_id;
		this.user_id = user_id;
		this.selectableOption_id = selectableOption_id;
		this.textAnswer = textAnswer;
		this.timeTookInSec = timeTookInSec;
	}

	async save() {
		let sql = `
		INSERT INTO Answer(
			question_id,
			user_id,
			selectableOption_id,
			textAnswer,
			timeTookInSec
		)
		VALUES(
			${this.question_id},
			${this.user_id},
			${this.selectableOption_id},
			'${this.textAnswer}',
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

export {};