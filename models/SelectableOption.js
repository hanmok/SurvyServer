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
class SelectableOption {
    constructor(question_id, position, value, placeholder) {
        this.question_id = question_id;
        this.position = position;
        this.value = value !== null && value !== void 0 ? value : null;
        this.placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : null;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO SelectableOption(
			question_id,
			position,
			value,
			placeholder
		)
		VALUES(
			'${this.question_id}',
			'${this.position}',
			'${this.value}',
			'${this.placeholder}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM SelectableOption`;
        return db.execute(sql);
    }
}
module.exports = SelectableOption;
