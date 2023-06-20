const dbModel = require('../config/db');
const db = dbModel.promise();

class Survey_genre { 
	genre_id: number;
	survey_id: number;
	constructor(genre_id, survey_id) { 
		this.genre_id = genre_id
		this.survey_id = survey_id
	}

	async save() { 
		let sql = `
		INSERT INTO Survey_genre(
			genre_id,
			survey_id
		) 
		VALUES(
			'${this.genre_id}',
			'${this.survey_id}'
		)`;
		return db.execute(sql);
	}

	static findAll() { 
		let sql = 'SELECT * FROM Survey_genre';
		return db.execute(sql);
	}

	// static findByGenreId(genre_id) { 
	// 	let sql = `SELECT * FROM Survey_genre WHERE genre_id=${genre_id}`;
	// 	return db.execute(sql);
	// }

	// genre 를 가져와야함.  Join 사용해서. 
	static findGenresBySurveyId(survey_id) { 
		// let sql = `SELECT * FROM Survey_genre WHERE survey_id=${survey_id}`; // 바뀌어야함. 
		let sql = `SELECT genre.id as id, genre.name as name FROM genre LEFT JOIN survey_genre ON genre.id =survey_genre.genre_id WHERE survey_id=${survey_id};`
		return db.execute(sql);
	}

	static findSurveysByGenreId(genre_id) {
		let sql = `SELECT * FROM Survey_genre WHERE genre_id=${genre_id}`;
		return db.execute(sql);
	}
	
}

module.exports = Survey_genre;

export {};