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
class User {
    constructor(username, password, age, isMale) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.isMale = isMale;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let d = new Date();
            let yyyy = d.getFullYear();
            let MM = d.getMonth() + 1;
            let dd = d.getDate();
            let HH = d.getHours();
            let mm = d.getMinutes();
            let sec = d.getSeconds();
            let registeredAt = `${yyyy}-${MM}-${dd} ${HH}:${mm}:${sec}`;
            console.log(`post user input, ${this.username}, ${this.password}, ${this.age}, ${this.isMale}}`);
            let sql = `
		INSERT INTO User(
			username, 
			password, 
			age, 
			isMale, 
			registeredAt
			)
		VALUES(
			'${this.username}',
			'${this.password}',
			${this.age},
			${this.isMale},
			'${registeredAt}'	
		)`;
            return db.execute(sql);
        });
    }
    static findAll() {
        let sql = "SELECT * FROM user";
        return db.execute(sql);
    }
    static findById(id) {
        let sql = `SELECT * FROM user WHERE id=${id}`;
        return db.execute(sql);
    }
}
module.exports = User;
