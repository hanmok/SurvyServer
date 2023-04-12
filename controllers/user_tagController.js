
const User_tag = require('../models/User_tag');

exports.getAllUser_tags = async (req, res, next) => { 
	try { 
		const [user_tags, _] = await User_tag.findAll();
		res.status(200).json({count: user_tags.length, user_tags});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createUser_tag = async(req, res, next) => { 
	try { 
		let {user_id, tag_id} = req.body;
		let user_tag = new User_tag(user_id, tag_id);
		user_tag = await user_tag.save();
		res.status(201).json({message: "user_tag created"})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getByUserId = async(req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		let [tags, _] = await User_tag.findByUserId(user_id);
		res.status(200).json({tags: tags[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

