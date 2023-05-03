
const dbModel = require('../config/db');
const db = dbModel.promise();

class SectionBridge { 
	current_id: number;
	next_id: number;
	question_id: number;
	selectableOption_id: number;
	constructor(current_id, next_id, question_id, selectableOption_id) { 
		this.current_id = current_id;
		this.next_id = next_id;
		this.question_id = question_id;
		this.selectableOption_id = selectableOption_id;
	}

	async save() { 
		let sql = `
		INSERT INTO SectionBridge(
			current_id,
			next_id,
			question_id,
			selectableOption_id
			)
		VALUES(
			'${this.current_id}',
			'${this.next_id}',
			'${this.question_id}',
			'${this.selectableOption_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = "SELECT * FROM SectionBridge";
		return db.execute(sql);
	}
}

module.exports = SectionBridge;
export {}; // file is an ES module