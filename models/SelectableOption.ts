const dbModel = require('../config/db');
const db = dbModel.promise();

class SelectableOption { 
	question_id: number;
	position: number;
	value: string;
	placeholder: string;

	constructor(question_id, position, value, placeholder) { 
		this.question_id = question_id;
		this.position = position;
		this.value = value ?? null;
		this.placeholder = placeholder ?? null
	}

	async save() { 
		let sql = `
		INSERT INTO SelectableOption(
			question_id,
			position,
			value,
			placeholder
		)
		VALUES(
			'${this.question_id}',
			'${this.position}',
			'${this.value}',
			'${this.placeholder}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM SelectableOption`
		return db.execute(sql);
	}
}

module.exports = SelectableOption;

export {}; // file is an ES module