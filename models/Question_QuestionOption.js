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
class Question_QuestionOption {
    constructor(question_id, questionOption_id) {
        this.question_id = question_id;
        this.questionOption_id = questionOption_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO Question_QuestionOption(
			question_id,
			questionOption_id	
		)
		VALUES(
			'${this.question_id}',
			'${this.questionOption_id}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM Question_QuestionOption`;
        return db.execute(sql);
    }
}
