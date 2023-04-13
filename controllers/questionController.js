const Question = require('../models/Question');

exports.createQuestion = async (req, res, next) => { 
	try { 
		let {question_type_id, section_id, position, text} = req.body;
		let question = new Question(question_type_id, section_id, position, text);
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