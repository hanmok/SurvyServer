const dbModel = require('../config/db');
const db = dbModel.promise();

class Survey { 
	title: string;
	participationGoal: number;
	// reward_range: string;

	// constructor(title, participationGoal, reward_range) { 
		constructor(title, participationGoal) { 
		this.title = title
		this.participationGoal = participationGoal
		// this.reward_range = reward_range
	}

	async save() { 
		let sql = `
		INSERT INTO Survey(
			title,
			participationGoal
			)
			VALUES(
				'${this.title}', 
				'${this.participationGoal}'
			)`; 
		return db.execute(sql);
	}

	static findAll() { 
		let sql = 'SELECT * FROM survey';
		return db.execute(sql);
	}

	static findById(id) { 
		let sql = `SELECT * FROM survey WHERE id=${id}`;
		return db.execute(sql);
	}
}

module.exports = Survey;

export {};