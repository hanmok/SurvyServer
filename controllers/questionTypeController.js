const Question_Type = require('../models/QuestionType');

exports.createQuestionType = async (req, res, next) => { 
	try { 
		let {description} = req.body;
		let question_type = new Question_Type(description);
		question_type = await question_type.save();
		res.status(201).json({message: "QuestionType created"});
	} catch (error) {
		console.log(error);
		next(error);
	}
}

exports.getAllQuestionTypes = async (req, res, next) => { 
	try { 
		const [question_types, _] = await Question_Type.findAll();
		res.status(200).json({count: question_types.length, question_types});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

