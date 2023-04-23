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
class Response {
    constructor(question_id, selectableOption_id, user_id, timeTookInSec, answerText = "") {
        this.question_id = question_id;
        this.selectableOption_id = selectableOption_id;
        this.user_id = user_id;
        this.timeTookInSec = timeTookInSec;
        this.answerText = answerText;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO Response(
			question_id,
			selectableOption_id,
			user_id,
			timeTookInSec,
			answerText
			)
			VALUES (
				'${this.question_id}',
				'${this.selectableOption_id}',
				'${this.user_id}',
				'${this.timeTookInSec}',
				'${this.answerText}'
			)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM Response`;
        return db.execute(sql);
    }
    static findById(id) {
        let sql = `SELECT * FROM Response WHERE id=${id}`;
        return db.execute(sql);
    }
}
module.exports = Response;
