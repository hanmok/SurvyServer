const db = require('../config/db');

class Response { 
	constructor(survey_id, user_id) { 
		this.survey_id = survey_id
		this.user_id = user_id
	}

	async save() { 
		let sql = `
		INSERT INTO Response(
			user_id,
			survey_id
		)
		VALUES(
			'${this.user_id}',
			'${this.survey_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Response`;
		return db.execute(sql);
	}

	static findById(response_id) { 
		let sql = `SELECT * FROM Response WHERE id=${response_id}`;
		return db.execute(sql);
	}
}

module.exports = Response;