const db = require('../config/db');

class Survey_tag { 
	tag_id: number;
	survey_id: number;
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
	static findTagsBySurveyId(survey_id) { 
		let sql = `SELECT * FROM Survey_tag WHERE survey_id=${survey_id}`; // 바뀌어야함. 
		return db.execute(sql);
	}

	static findSurveysByTagId(tag_id) {
		let sql = `SELECT * FROM Survey_tag WHERE tag_id=${tag_id}`;
		return db.execute(sql);
	}
	
}

module.exports = Survey_tag;

export {};