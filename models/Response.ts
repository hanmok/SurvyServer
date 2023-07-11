const dbModel = require('../config/db');
const db = dbModel.promise();

class Response { 
	question_id: number;
	selectableOption_id: number;
	user_id: number;
	survey_id: number;
	// answerText: string;
	// timeTookInSec: number;

	constructor(question_id, selectableOption_id, user_id, survey_id) { 
		this.question_id = question_id;
		this.selectableOption_id = selectableOption_id;
		this.user_id = user_id;
		this.survey_id = survey_id;
		// this.timeTookInSec = timeTookInSec;
		// this.answerText = answerText;
	}

	async save() { 
		let sql = `
		INSERT INTO Response(
			question_id,
			selectableOption_id,
			user_id,
			survey_id
			)
			VALUES (
				'${this.question_id}',
				'${this.selectableOption_id}',
				'${this.user_id}',
				'${this.survey_id}'
			)`;
		// return db.execute(sql);
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM Response`;
		// return db.execute(sql);
		return db.execute(sql);
	}

	static findById(id) { 
		let sql = `SELECT * FROM Response WHERE id=${id}`;
		// return db.execute(sql);
		return db.execute(sql);
	}
}

module.exports = Response;

export {};