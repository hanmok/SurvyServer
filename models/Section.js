const db = require('../config/db');

class Section { 
	constructor(title, survey_id) { 
		this.title = title;
		this.survey_id = survey_id;
	}

	async save() { 
		let sql = `
		INSERT INTO Section(
			title,
			survey_id
		)
		VALUES(
			'${this.title}',
			'${this.survey_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Section`;
		return db.execute(sql);
	}

	// static findBySurveyId(survey_id) { 
	// 	let sql = `SELECT * FROM Section WHERE survey_id=${survey_id}`;
	// 	return db.execute(sql);
	// }

	static findById(section_id) { 
		let sql = `SELECT * FROM Section WHERE id=${section_id}`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Section`;
		return db.execute(sql);
	}
}

module.exports = Section;