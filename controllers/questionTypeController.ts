const QuestionType = require('../models/QuestionType');

exports.createQuestionType = async (req, res, next) => { 
	try { 
		let {id, description} = req.body;
		let questionType = new QuestionType(id, description);
		questionType = await questionType.save();
		res.status(201).json({message: "QuestionType created", id: questionType[0].insertId});
	} catch (error) {
		console.log(error);
		next(error);
	}
}

exports.getAllQuestionTypes = async (req, res, next) => { 
	try { 
		const [questionTypes, _] = await QuestionType.findAll();
		res.status(200).json({questionTypes});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

export {};