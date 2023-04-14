const Question_QuestionOption = require('../models/Question_QuestionOption');

exports.getAllQuestion_QuestionOptions = async (req, res, next) => {
	try { 
		const [question_questionOptions, _] = await Question_QuestionOption.findAll();
		res.status(200).json({count: question_questionOptions.length, question_questionOptions});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createQuestion_QuestionOption = async (req, res, next) => { 
	try {
		let {question_id, questionOption_id} = req.body;
		let question_questionOption = new Question_QuestionOption(question_id, questionOption_id);
		question_questionOption = await question_questionOption.save();
		res.status(201).json({message: "question_questionOption created"})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}