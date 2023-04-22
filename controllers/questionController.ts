const Question = require('../models/Question');

exports.createQuestion = async (req, res, next) => { 
	try { 
		let {questionType_id, section_id, position, text, expectedTimeInSec} = req.body;
		console.log(`questionType_id: ${questionType_id}`);
		let question = new Question(questionType_id, section_id, position, text, expectedTimeInSec);
		question = await question.save();
		res.status(201).json({message: "Question Created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getQuestionById = async (req, res, next) => { 
	try { 
		let questionId = req.params.id;
		let [question, _] = await Question.findById(questionId);
		res.status(200).json({question: question[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getAllQuestions = async (req, res, next) => { 
	try { 
		const [questions, _] = await Question.findAll();
		res.status(200).json({count: questions.length, questions});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

export {};