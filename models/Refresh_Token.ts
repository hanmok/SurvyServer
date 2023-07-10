const dbModel = require('../config/db');
const db = dbModel.promise();

class Refresh_Token { 
	username: string;
	refreshToken: string;
	
	constructor(username, refreshToken) { 
		this.username = username;
		this.refreshToken = refreshToken;
	}
	
	// TODO: 이거.. 간단한 함수로 만들기! Javascript 공부좀 해야겠다. 
	async save() { 
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
	}

	// 결과가 있는지 없는지 확인은 어떻게 하지? 
	static find(username, refreshToken) { 
		let sql = `SELECT * FROM refresh_token WHERE username='${username}' AND refreshToken = '${refreshToken}' AND end_at > NOW()`
		return db.execute(sql);
	}

	static delete(username) { 
		let sql = `DELETE FROM refresh_token WHERE username='${username}'`
		return db.execute(sql);
	}

	static generateAccessToken(refreshToken) { 
		
	}
}

module.exports = Refresh_Token;
export {};