const Post = require('../models/Post');

exports.getPostedSurveysByUserId = async(req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		let [surveys, _] = await Post.findByUserId(user_id);
		res.status(200).json({surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getUserByPostedSurveyId = async (req, res, next) => { 
	try { 
		let survey_id = req.params.survey_id;
		let [user, _] = await Post.findBySurveyId(survey_id);
		res.status(200).json({user});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.create_post = async(req, res, next) => { 
	try { 
		// let {user_id, survey_id} = req.params;
		let {user_id, survey_id} = req.body;
		let post = new Post(user_id, survey_id);
		post = await post.save();

		res.status(201).json({message: "post created", survey_id: survey_id, user_id: user_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}



export {};