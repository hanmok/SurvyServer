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
class User_genre {
    constructor(user_id, genre_id) {
        this.user_id = user_id;
        this.genre_id = genre_id;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `
		INSERT INTO User_genre(
			user_id,
			genre_id
		) 
		VALUES(
			'${this.user_id}',
			'${this.genre_id}'
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = `SELECT * FROM User_genre`;
        return db.execute(sql);
    }
    static findGenresByUserId(user_id) {
        let sql = `SELECT * FROM User_genre WHERE user_id=${user_id}`;
        return db.execute(sql);
    }
    static findUsersByGenreId(user_id) {
        let sql = `SELECT * FROM User_genre WHERE user_id=${user_id}`;
        return db.execute(sql);
    }
}
module.exports = User_genre;
