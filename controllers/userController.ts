const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => { 
	try { 
		const [users, _] = await User.findAll();
		res.status(200).json({count: users.length, users});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createUser = async (req, res, next) => { 
	try { 
		// let {username, password, age, isMale} = req.body;
		let {username, password, isMale} = req.body;
		let user = new User(username, password, isMale);
		user = await user.save();
		// res.status(201).json({message: "User created"});
		res.status(201).json({message: "User created", id: user[0].insertId});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

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