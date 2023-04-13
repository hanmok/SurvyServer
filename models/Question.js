const db = require('../config/db');

class Question { 
	constructor(question_type_id, section_id, position, text) { 
		this.question_type_id = question_type_id;
		this.section_id = section_id;
		this.position = position;
		this.text = text;
	}

	async save() { 
		let sql = `
		INSERT INTO Question(
			question_type_id,
			section_id,
			position,
			text
		)
		VALUES(
			'${this.question_type_id}',
			'${this.section_id}',
			'${this.position}',
			'${this.text}'
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