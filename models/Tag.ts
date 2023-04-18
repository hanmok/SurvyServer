const db = require('../config/db');

class Tag { 
	name: string;
	constructor(name) { 
		this.name = name
	}
	async save() { 
		let sql = `
		INSERT INTO Tag(
			name
		)
		VALUES(
			'${this.name}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = 'SELECT * FROM Tag'
		return db.execute(sql);
	}

	static findById(id) { 
		let sql = `SELECT * FROM tag WHERE id=${id}`;
		return db.execute(sql);
	}
}

module.exports = Tag;

export {};