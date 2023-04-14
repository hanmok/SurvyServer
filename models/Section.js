const db = require('../config/db');

class Section { 
	reward = 100;
	constructor(survey_id, expectedTimeInMin) { 
		this.survey_id = survey_id;
		this.expectedTimeInMin = expectedTimeInMin;
		this.reward = expectedTimeInMin * 100;
	}

	async save() { 
		let sql = `
		INSERT INTO Section(
			survey_id,
			expectedTimeInMin,
			reward
		)
		VALUES(
			'${this.survey_id}',
			'${this.expectedTimeInMin}',
			'${this.expectedTimeInMin * 100}' 
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