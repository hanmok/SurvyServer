
const User_tag = require('../models/User_tag');
// const Tag = require('../models/Tag')


exports.getAllUser_tags = async (req, res, next) => { 
	try { 
		const [user_tags, _] = await User_tag.findAll();
		res.status(200).json({count: user_tags.length, user_tags});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};


exports.getTagsByUserId = async (req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		console.log(`current user_id by getTagsByUserId: ${user_id}`);
		let [tags, _] = await User_tag.findTagsByUserId(user_id);
		res.status(200).json({count: tags.length, tags});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getUsersByTagId = async (req, res, next) => { 
	try { 
		let tag_id= req.params.tag_id;
		let [users, _] = await User_tag.findUsersByTagId(tag_id);
		res.status(200).json({count: users.length, users});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createUser_tag = async (req, res, next) => { 
	try { 
		let {user_id, tag_id} = req.params;
		let user_tag = new User_tag(user_id, tag_id);
		user_tag = await user_tag.save();
		res.status(201).json({"message": "user_tag created", user_id: user_id, tag_id: tag_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};