const db = require('../config/db');

class Survey { 
	title: string;
	participationGoal: number;
	constructor(title, participationGoal) { 
		this.title = title
		this.participationGoal = participationGoal
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