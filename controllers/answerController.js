const Answer = require('../models/Answer');

exports.getAllAnswers = async (req, res, next) => { 
	try { 
		const [answers, _] = await Answer.findAll();
		res.status(200).json({count: answers.length, answers});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createAnswer = async (req, res, next) => { 
	try { 
		let {question_id, user_id, answer_text, timeTookInSec} = req.body;
		let answer = new Answer(question_id, user_id, answer_text, timeTookInSec);
		answer = await answer.save();
		res.status(201).json({message: "Answer created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getAnswerById = async (req, res, next) => { 
	try { 
		let answerId = req.params.id;
		let [answer, _] = await Answer.findById(answerId);
		res.status(200).json({answer: answer[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}