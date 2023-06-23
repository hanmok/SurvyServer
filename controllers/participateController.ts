const Participate = require('../models/Participate');

exports.getParticipatedSurveysByUserId = async(req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		let [surveys, _] = await Participate.findByUserId(user_id);
		res.status(200).json({surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getParticipatedUsersBySurveyId = async (req, res, next) => { 
	try { 
		let survey_id = req.params.survey_id;
		let [user, _] = await Participate.findBySurveyId(survey_id);
		res.status(200).json({user});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createParticipate = async(req, res, next) => { 
	try { 
		let {user_id, survey_id} = req.params;
		let participate = new Participate(user_id, survey_id);
		participate = await participate.save(); 
		res.status(201).json({message: "participate created", user_id: user_id, survey_id: survey_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}



export {};