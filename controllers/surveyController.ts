const Survey = require('../models/Survey');

exports.getAllSurveys = async (req, res, next) => { 
	try { 
		const [surveys, _] = await Survey.findAll();
		res.status(200).json({count: surveys.length, surveys});

	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createSurvey = async (req, res, next) => { 
	try { 
		let {title, participationGoal, reward_range} = req.body;
		let survey = new Survey(title, participationGoal, reward_range);
		survey = await survey.save();

		res.status(201).json({message: "Survey created", surveyInfo: survey});

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