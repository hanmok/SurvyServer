"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = require('../config/db');
const db = dbModel.promise();
class Survey_genre {
    constructor(genre_id, survey_id) {
        this.genre_id = genre_id;
        this.survey_id = survey_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
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
        let sql = `SELECT genre.id as id, genre.name as name FROM genre LEFT JOIN survey_genre ON genre.id =survey_genre.genre_id WHERE survey_id=${survey_id};`;
        return db.execute(sql);
    }
    static findSurveysByGenreId(genre_id) {
        let sql = `SELECT * FROM Survey_genre WHERE genre_id=${genre_id}`;
        return db.execute(sql);
    }
}
module.exports = Survey_genre;
