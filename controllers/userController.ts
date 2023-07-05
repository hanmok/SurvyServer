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

exports.login = async (req, res, next) => {
	try { 
		let {username, password} = req.body;
		// const accessToken = jwt.sign({username, password}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})  
		const accessToken = generateAccessToken(username);
		const refreshToken = generateRefreshToken(username);  
		// refreshToken 은 DB 에 따로 처리하기. 
		let [user, _] = await User.login(username, password); 
		res.status(200).json({user: user[0], accessToken: accessToken});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

function generateAccessToken(username) { 
	return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}

function generateRefreshToken(username) { 
	return jwt.sign(username, process.env.REFRESH_TOKEN_SECRET)
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