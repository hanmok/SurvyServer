const questionType = require('../models/QuestionType');

exports.createQuestionType = async (req, res, next) => { 
	try { 
		let {description} = req.body;
		let questionType = new questionType(description);
		questionType = await questionType.save();
		res.status(201).json({message: "QuestionType created"});
	} catch (error) {
		console.log(error);
		next(error);
	}
}

exports.getAllQuestionTypes = async (req, res, next) => { 
	try { 
		const [questionTypes, _] = await questionType.findAll();
		res.status(200).json({count: questionTypes.length, questionTypes});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

