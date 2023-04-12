const db = require('../config/db');

class User_survey { 
	constructor(user_id, survey_id) { 
		this.user_id = user_id
		this.survey_id = survey_id
	}

	async save() { 
		let sql = `
		INSERT INTO User_survey(
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
		let sql = `SELECT * FROM User_survey`;
		return db.execute(sql);
	}

	static findByUserId(user_id) { 
		let sql = `SELECT * FROM User_survey WHERE user_id=${user_id}`;
		return db.execute(sql);
	}
	// static findBySurveyId(survey_id) { 
	// 	let sql = `SELECT * FROM User_survey WHERE survey_id=${survey_id}`;
	// 	return db.execute(sql);
	// }
}

module.exports = User_survey;