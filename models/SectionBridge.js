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
class SectionBridge {
    constructor(current_id, next_id, question_id, selectableOption_id) {
        this.current_id = current_id;
        this.next_id = next_id;
        this.question_id = question_id;
        this.selectableOption_id = selectableOption_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO SectionBridge(
			current_id,
			next_id,
			question_id,
			selectableOption_id
			)
		VALUES(
			'${this.current_id}',
			'${this.next_id}',
			'${this.question_id}',
			'${this.selectableOption_id}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = "SELECT * FROM SectionBridge";
        return db.execute(sql);
    }
}
module.exports = SectionBridge;
