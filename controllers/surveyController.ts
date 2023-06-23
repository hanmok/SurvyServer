const Survey = require('../models/Survey');
const Post = require('../models/Post');

exports.getAllSurveys = async (req, res, next) => { 
	try { 
		const [surveys, _] = await Survey.findAll();
		res.status(200).json({surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createSurvey = async (req, res, next) => { 
	try { 
		// let {title, participationGoal, reward_range, user_id} = req.body;
		let {title, participationGoal, user_id} = req.body;
		// let survey = new Survey(title, participationGoal, reward_range);
		let survey = new Survey(title, participationGoal);
		survey = await survey.save();
		let survey_id = survey[0].insertId;
		let post = new Post(user_id, survey_id);
		post = await post.save();
		res.status(201).json({message: "Survey created", id: survey[0].insertId});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getSurveyById = async (req, res, next) => { 
	try { 
		let surveyId = req.params.id;
		let [survey, _] = await Survey.findById(surveyId);
		res.status(200).json({survey: survey[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

export {};