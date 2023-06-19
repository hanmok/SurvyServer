const dbModel = require('../config/db');
const db = dbModel.promise();

class Section { 
	title: string;
	survey_id: string;
	sequence: number;
	constructor(title, survey_id, sequence) { 
		this.title = title ?? "";
		this.survey_id = survey_id;
		this.sequence = sequence ?? 0;
	}

	async save() { 
		let sql = `
		INSERT INTO Section(
			title,
			survey_id,
			sequence
		)
		VALUES(
			'${this.title}',
			'${this.survey_id}',
			'${this.sequence}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Section`;
		return db.execute(sql);
	}

	static findById(section_id) { 
		let sql = `SELECT * FROM Section WHERE id=${section_id}`;
		return db.execute(sql);
	}
}

module.exports = Section;

export {};