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
class Survey {
    // reward_range: string;
    // constructor(title, participationGoal, reward_range) { 
    constructor(title, participationGoal) {
        this.title = title;
        this.participationGoal = participationGoal;
        // this.reward_range = reward_range
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
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
