const dbModel = require('../config/db');
const db = dbModel.promise();

class Refresh_Token { 
	// user_id: number;
	username: string;
	refreshToken: string;
	end_at: Date;
	constructor(username, refreshToken, end_at) { 
		this.username = username;
		this.refreshToken = refreshToken
		this.end_at = end_at;
	}
	
	// TODO: 이거.. 간단한 함수로 만들기! Javascript 공부좀 해야겠다. 
	async save() { 
		let createdDate = new Date();
		let yyyy1 = createdDate.getFullYear();
		let MM1 = createdDate.getMonth() + 1;
		let dd1 = createdDate.getDate();
		let HH1 = createdDate.getHours();
		let mm1 = createdDate.getMinutes();
		let sec1 = createdDate.getSeconds();
		let created_at = `${yyyy1}-${MM1}-${dd1} ${HH1}:${mm1}:${sec1}`;

		let endedDate = new Date();
		endedDate.setMonth(endedDate.getMonth() + 6);

		let yyyy2 = endedDate.getFullYear();
		let MM2 = endedDate.getMonth() + 1;
		let dd2 = endedDate.getDate();
		let HH2 = endedDate.getHours();
		let mm2 = endedDate.getMinutes();
		let sec2 = endedDate.getSeconds();
		let end_at = `${yyyy2}-${MM2}-${dd2} ${HH2}:${mm2}:${sec2}`;
		
		let sql = `
		INSERT INTO refresh_token(
			user_id, 
			refreshToken, 
			created_at,
			end_at
		)
		VALUES(
			'${this.username}',
			'${this.refreshToken}',
			'${created_at}',
			'${end_at}'
		)`;
		return db.execute(sql);
	}

	static find(username, refreshToken) { 
		let sql = `SELECT * FROM refresh_token WHERE username='${username}' AND refreshToken = '${refreshToken}'`	
		return db.execute(sql);
	}

	static delete(username) { 
		let sql = `DELETE FROM refresh_token WHERE username='${username}'`
		return db.execute(sql);
	}
}

module.exports = Refresh_Token;
export {};