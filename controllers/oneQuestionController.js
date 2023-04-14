const OneQuestion = require('../models/OneQuestion');

exports.getAllOneQuestions = async (req, res, next) => { 
	try { 
		const [oneQuestions, _] = await OneQuestion.findAll();
		res.status(200).json({count: oneQuestions.length, oneQuestions});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createOneQuestion = async (req, res, next) => { 
	try { 
		let {user_id, questionType_id, text, reward} = req.body;
		let oneQuestion = new OneQuestion(user_id, questionType_id, text, reward);
		console.log(`input:${user_id}, ${questionType_id}`);
		oneQuestion = await oneQuestion.save();
		res.status(201).json({message: "OneQuestion created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getOneQuestionById = async (req, res, next) => { 
	try { 
		let id = req.params.id;
		let [oneQuestion, _] = await OneQuestion.findById(id);
		res.status(200).json({oneQuestion: oneQuestion[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}