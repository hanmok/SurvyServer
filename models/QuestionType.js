const db = require('../config/db');

class QuestionType { 
	constructor(id, description) { 
		this.id = id;
		this.description = description;
	}

	async save() { 
		let sql = `
		INSERT INTO QuestionType(
			id,
			description
		)
		VALUES(
			'${this.id}',
			'${this.description}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM QuestionType`;
		return db.execute(sql);
	}
}

module.exports = QuestionType