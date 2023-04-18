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
const db = require('../config/db');
class Survey_tag {
    constructor(tag_id, survey_id) {
        this.tag_id = tag_id;
        this.survey_id = survey_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO Survey_tag(
			tag_id,
			survey_id
		) 
		VALUES(
			'${this.tag_id}',
			'${this.survey_id}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM Survey_tag`;
        return db.execute(sql);
    }
    // static findByTagId(tag_id) { 
    // 	let sql = `SELECT * FROM Survey_tag WHERE tag_id=${tag_id}`;
    // 	return db.execute(sql);
    // }
    static findTagsBySurveyId(survey_id) {
        let sql = `SELECT * FROM Survey_tag WHERE survey_id=${survey_id}`; // 바뀌어야함. 
        return db.execute(sql);
    }
    static findSurveysByTagId(tag_id) {
        let sql = `SELECT * FROM Survey_tag WHERE tag_id=${tag_id}`;
        return db.execute(sql);
    }
}
module.exports = Survey_tag;
