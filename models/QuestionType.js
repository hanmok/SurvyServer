const db = require('../config/db');

class QuestionType { 
	constructor(description) { 
		this.description = description
	}

	async save() { 
		let sql = `
		INSERT INTO QuestionType(
			description
		)
		VALUES(
			'${this.description}
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM QuestionType`;
		return db.execute(sql);
	}
}

module.exports = QuestionType