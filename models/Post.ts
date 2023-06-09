const dbModel = require('../config/db');
const db = dbModel.promise();

class Post { 
	user_id: number;
	survey_id: number;
	constructor(user_id, survey_id) { 
		this.user_id = user_id
		this.survey_id = survey_id
	}

	async save() { 
		let sql = `
		INSERT INTO post(
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
		let sql = `SELECT * FROM post`;
		return db.execute(sql);
	}

	static findByUserId(user_id){ 
		let sql = `SELECT * FROM post WHERE user_id=${user_id}`;
		return db.execute(sql);
	}

	// static findByUserId(user_id) { 
	// 	let sql = `SELECT * FROM request WHERE user_id=${user_id}`;
	// 	return db.execute(sql);
	// }

	static findBySurveyId(survey_id) { 
		let sql = `SELECT * FROM post WHERE survey_id=${survey_id}`;
		return db.execute(sql);
	}
}

module.exports = Post;

export {};