const db = require('../config/db');

class SelectableOption { 
	constructor(question_id, position, value) { 
		this.question_id = question_id;
		this.position = position;
		this.value = value;
	}

	async save() { 
		let sql = `
		INSERT INTO SelectableOption(
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

	static findAll() { 
		let sql = `SELECT * FROM SelectableOption`
		return db.execute(sql);
	}
}

module.exports = SelectableOption;