const dbModel = require('../config/db');
const db = dbModel.promise();

class Request { 
	user_id: number;
	survey_id: number;
	constructor(user_id, survey_id) { 
		this.user_id = user_id
		this.survey_id = survey_id
	}

	async save() { 
		let sql = `
		INSERT INTO participate(
			user_id,
			survey_id
		) 
		VALUES(
			'${this.user_id}',
			'${this.survey_id}'
		)`;
		return db.execute(sql);
		// return db.query(sql, function(err, results, fields) {})
		// return db.execute()
	}

	static findAll() { 
		let sql = `SELECT * FROM participate`;
		return db.execute(sql);
	}

	static findByUserId(user_id){ 
		let sql = `SELECT * FROM participate WHERE user_id=${user_id}`;
		return db.execute(sql);
	}

	static findBySurveyId(survey_id) { 
		let sql = `SELECT * FROM participate WHERE survey_id=${survey_id}`;
		return db.execute(sql);
	}
}

module.exports = Request;

export {};