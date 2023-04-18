const User_survey = require('../models/User_survey');

exports.getAllUser_surveys = async (req, res, next) => { 
	try { 
		const [user_surveys, _] = await User_survey.findAll();
		res.status(200).json({count: user_surveys.length, user_surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getSurveysByUserId = async(req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		let [surveys, _] = await User_survey.findByUserId(user_id);
		// res.status(200).json({surveys: surveys[0]});
		res.status(200).json({count: surveys.length, surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createUser_survey = async(req, res, next) => { 
	try { 
		let {user_id, survey_id} = req.body;
		let user_survey = new User_survey(user_id, survey_id);
		user_survey = await user_survey.save();
		res.status(201).json({message: "user_survey created"})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}



export {};