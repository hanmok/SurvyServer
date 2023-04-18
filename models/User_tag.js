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
class User_tag {
    constructor(user_id, tag_id) {
        this.user_id = user_id;
        this.tag_id = tag_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO User_tag(
			user_id,
			tag_id
		) 
		VALUES(
			'${this.user_id}',
			'${this.tag_id}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM User_tag`;
        return db.execute(sql);
    }
    static findTagsByUserId(user_id) {
        let sql = `SELECT * FROM User_tag WHERE user_id=${user_id}`;
        return db.execute(sql);
    }
    static findUsersByTagId(user_id) {
        let sql = `SELECT * FROM User_tag WHERE user_id=${user_id}`;
        return db.execute(sql);
    }
}
module.exports = User_tag;
