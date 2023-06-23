// Answer 이란거 없는데 ?
const Answer = require('../models/Answer');

exports.getAllAnswers = async (req, res, next) => { 
	try { 
		const [answers, _] = await Answer.findAll();
		res.status(200).json({answers});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createAnswer = async (req, res, next) => { 
	try { 
		let {question_id, user_id, selectableOption_id, textAnswer, timeTookInSec} = req.body;
		let answer = new Answer(question_id, user_id, selectableOption_id, textAnswer, timeTookInSec);
		answer = await answer.save();
		res.status(201).json({message: "Answer created", answerInfo: answer});
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
export {};