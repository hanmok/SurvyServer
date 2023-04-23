const Request = require('../models/participate');

// exports.getAllparticipates = async (req, res, next) => { 
// 	try { 
// 		const [participates, _] = await Request.findAll();
// 		res.status(200).json({count: participates.length, participates});
// 	} catch (error) {
// 		console.log(error);
// 		next(error);
// 	}
// }

exports.getParticipatedSurveysByUserId = async(req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		let [surveys, _] = await Request.findByUserId(user_id);
		// res.status(200).json({surveys: surveys[0]});
		res.status(200).json({count: surveys.length, surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getParticipatedUsersBySurveyId = async (req, res, next) => { 
	try { 
		let survey_id = req.params.survey_id;
		let [user, _] = await Request.findBySurveyId(survey_id);
		res.status(200).json({user});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createparticipate = async(req, res, next) => { 
	try { 
		let {user_id, survey_id} = req.params;
		let participate = new Request(user_id, survey_id);
		participate = await participate.save();
		res.status(201).json({message: "participate created"})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}



export {};