const dbModel = require('../config/db');
const db = dbModel.promise();

class User_genre { 
	user_id: number;
	genre_id: number;
	constructor(user_id, genre_id) { 
		this.user_id = user_id
		this.genre_id = genre_id
	}

	async save() { 
		let sql = `
		INSERT INTO User_genre(
			user_id,
			genre_id
		) 
		VALUES(
			'${this.user_id}',
			'${this.genre_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = `SELECT * FROM User_genre`;
		return db.execute(sql);
	}

	static findGenresByUserId(user_id) { 
		let sql = `SELECT * FROM User_genre WHERE user_id=${user_id}`;
		return db.execute(sql);
	}

	static findUsersByGenreId(user_id){
		let sql = `SELECT * FROM User_genre WHERE user_id=${user_id}`;
		return db.execute(sql);
	}
}

module.exports = User_genre;

export {};