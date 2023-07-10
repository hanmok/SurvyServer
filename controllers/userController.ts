require('dotenv').config()
const User = require('../models/User');
const RefreshToken = require('../models/Refresh_Token');
const jwt = require('jsonwebtoken');

// 관리자용
exports.getAllUsers = async (req, res, next) => { 
	try { 
		const [users, _] = await User.findAll();
		res.status(200).json({users});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createUser = async (req, res, next) => { 
	try { 
		let {username, password} = req.body;
		let user = new User(username, password);
		user = await user.save();
		let createdId = user[0].insertId
		let [createdUser, _] = await User.findById(createdId) 
		res.status(200).json({user: createdUser[0], accessToken: "" })
	} catch (error) { 
		console.log(error);
		next(error); 
	}
}; 

// User.login 에서 해당 유저가 존재하는지 확인 필요. 
exports.login = async (req, res, next) => {
	try { 
		let {username, password} = req.body;
		let myUser = {name: username}
		const accessToken = generateAccessToken(myUser);
		const refreshToken = generateRefreshToken(myUser);
		// refreshToken 은 DB 에 따로 처리하기. 
		let [user, _] = await User.login(username, password); // user 가 있을수도, 없을수도.. 확인 필요. 
		let newRefreshToken = new RefreshToken(username, refreshToken);
		newRefreshToken = await newRefreshToken.save();
		res.status(200).json({user: user[0], accessToken: accessToken, refreshToken: refreshToken});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

// Access Token 도 무효화 시키기, 이때, Token 체크 해야함. 
exports.logout = async (req, res, next) => { 
	try { 
		// accessToken 확인해야함. 
		let {username} = req.body;
		let _ = await RefreshToken.delete(username)
		res.status(200).json({message: `refresh token deleted, username: '${username} has logged out.`})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getUserById = async (req, res, next) => { 
	try { 
		let userId = req.params.id;
		let [user, _] = await User.findById(userId);
		res.status(200).json({user: user[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.regenerateAccessToken = async (req, res, next) => {
	try { 
		let {username, refreshToken} = req.body;

		let [validRefreshToken, _] = await RefreshToken.find(username, refreshToken);
		
		// 이렇게 확인하면 확인이 안됨. Data 가 없어도 null 이 아님. 
		// if (validRefreshToken !== null) { // refreshToken 존재 시, accessToken 발급 후 return

		let isEmpty = validRefreshToken.length === 0
		
		if (!isEmpty) { // refreshToken 존재 시, accessToken 발급 후 return
			let myUser = {name: username}
			let accessToken = generateAccessToken(myUser)
			let [user, _] = await User.findByUsername(username)
			res.status(201).json({user: user[0], accessToken: accessToken});
		} else { 
			res.status(400).json({message: "Token expired."})
		}
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

function generateAccessToken(user) { 
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

function generateRefreshToken(user) {  // 음.. 해당 user 의 refreshToken 이 있는지 먼저 확인해야하나? 
	// return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '180d'})
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}

// 이거.. 어떻게 바꿔야하지? 
function authenticateToken(req, res, next) { 
	// form:: Bearer Token 
	const authHeader = req.headers["authorization"]
	const accessToken = authHeader && authHeader.split(' ')[1]

	if (accessToken == null) return res.sendStatus(401)

	jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => { 
	  if (err) return res.sendStatus(403) // no longer valid
	  req.user = user
	  next()
	})
}