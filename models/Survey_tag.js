const db = require('../config/db');

class Survey_tag { 
	constructor(tag_id, survey_id) { 
		this.tag_id = tag_id
		this.survey_id = survey_id
	}

	async save() { 
		let sql = `
		INSERT INTO Survey_tag(
			tag_id,
			survey_id
		) 
		VALUES(
			'${this.tag_id}',
			'${this.survey_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Survey_tag`;
		return db.execute(sql);
	}

	// static findByTagId(tag_id) { 
	// 	let sql = `SELECT * FROM Survey_tag WHERE tag_id=${tag_id}`;
	// 	return db.execute(sql);
	// }
	// static findBySurveyId(survey_id) { 
	// 	let sql = `SELECT * FROM User_survey WHERE survey_id=${survey_id}`;
	// 	return db.execute(sql);
	// }
}

module.exports = Survey_tag;