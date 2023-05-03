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
class Question {
    constructor(questionType_id, section_id, position, text, expectedTimeInSec) {
        this.questionType_id = questionType_id;
        this.section_id = section_id;
        this.position = position !== null && position !== void 0 ? position : 1;
        this.text = text;
        this.expectedTimeInSec = expectedTimeInSec !== null && expectedTimeInSec !== void 0 ? expectedTimeInSec : 10;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO Question(
			questionType_id,
			section_id,
			position,
			text,
			expectedTimeInSec
		)
		VALUES(
			'${this.questionType_id}',
			'${this.section_id}',
			'${this.position}',
			'${this.text}',
			'${this.expectedTimeInSec}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM Question`;
        return db.execute(sql);
    }
    static findById(question_id) {
        let sql = `SELECT * FROM Question WHERE id=${question_id}`;
        return db.execute(sql);
    }
}
module.exports = Question;
