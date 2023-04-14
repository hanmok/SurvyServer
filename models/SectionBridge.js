
const db = require('../config/db');

class SectionBridge { 
	constructor(current_id, next_id, question_id, separation_answer_index) { 
		this.current_id = current_id;
		this.next_id = next_id;
		this.question_id = question_id;
		this.separation_answer_index = separation_answer_index;
	}

	async save() { 
		let sql = `
		INSERT INTO SectionBridge(
			current_id,
			next_id,
			question_id,
			separation_answer_index
			)
		VALUES(
			'${this.current_id}',
			'${this.next_id}',
			'${this.question_id}',
			'${this.separation_answer_index}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = "SELECT * FROM SectionBridge";
		return db.execute(sql);
	}
}

module.exports = SectionBridge;