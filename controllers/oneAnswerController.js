const OneAnswer = require('../models/OneAnswer');

exports.getAllOneAnswers = async (req, res, next) => { 
	try { 
		const [oneAnswers, _] = await OneAnswer.findAll();
		res.status(200).json({count: oneAnswers.length, oneAnswers});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createOneAnswer = async (req, res, next) => { 
	try { 
		let {user_id, oneQuestion_id, questionOption_id, answer} = req.body;
		let oneAnswer = new OneAnswer(user_id, oneQuestion_id, questionOption_id, answer);
		oneAnswer = await oneAnswer.save();
		res.status(201).json({message: "oneAnswer created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getOneAnswerById = async (req, res, next) => { 
	try { 
		let id = req.params.id;
		let [oneAnswer, _] = await OneAnswer.findById(id);
		res.status(200).json({oneAnswer: oneAnswer[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}