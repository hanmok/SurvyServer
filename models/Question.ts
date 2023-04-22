const db = require('../config/db');

class Question { 
	questionType_id: number;
	section_id: number;
	position: number;
	text: string;
	expectedTimeInSec: number;
	// correctAnswer: number; // TypeScript 먼저 배우기.. 

	constructor(questionType_id, section_id, position, text, expectedTimeInSec) { 
		this.questionType_id = questionType_id;
		this.section_id = section_id;
		this.position = position ?? 1;
		this.text = text;
		this.expectedTimeInSec = expectedTimeInSec ?? 10;
	}

	async save() { 
		let sql = `
		INSERT INTO Question(
			questionType_id,
			section_id,
			position,
			text,
			expectedTimeInSec
		)
		VALUES(
			'${this.questionType_id}',
			'${this.section_id}',
			'${this.position}',
			'${this.text}',
			'${this.expectedTimeInSec}'
		)`;
		return db.execute(sql);
	}	

	static findAll() { 
		let sql = `SELECT * FROM Question`;
		return db.execute(sql);
	}

	static findById(question_id) {
		let sql = `SELECT * FROM Question WHERE id=${question_id}`;
		return db.execute(sql);
	}
}

module.exports = Question;

export {};