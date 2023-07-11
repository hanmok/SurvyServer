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
class Refresh_Token {
    constructor(username, refreshToken) {
        this.username = username;
        this.refreshToken = refreshToken;
    }
    // TODO: 이거.. 간단한 함수로 만들기! Javascript 공부좀 해야겠다. 
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let endedDate = new Date();
            endedDate.setMonth(endedDate.getMonth() + 6);
            let yyyy = endedDate.getFullYear();
            let MM = endedDate.getMonth() + 1;
            let dd = endedDate.getDate();
            let HH = endedDate.getHours();
            let mm = endedDate.getMinutes();
            let sec = endedDate.getSeconds();
            let end_at = `${yyyy}-${MM}-${dd} ${HH}:${mm}:${sec}`;
            let sql = `
		INSERT INTO refresh_token(
			username,
			refreshToken, 
			end_at
		)
		VALUES(
			'${this.username}',
			'${this.refreshToken}',
			'${end_at}'
		)`;
            return db.execute(sql);
        });
    }
    // 결과가 있는지 없는지 확인은 어떻게 하지? 
    static find(username, refreshToken) {
        let sql = `SELECT * FROM refresh_token WHERE username='${username}' AND refreshToken = '${refreshToken}' AND end_at > NOW()`;
        return db.execute(sql);
    }
    static findUsingName(username) {
        let sql = `SELECT * FROM refresh_token WHERE username='${username} AND end_at > NOW()`;
        return db.execute(sql);
    }
    static delete(username) {
        let sql = `DELETE FROM refresh_token WHERE username='${username}'`;
        return db.execute(sql);
    }
}
module.exports = Refresh_Token;
