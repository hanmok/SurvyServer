const Response = require('../models/Response');

exports.getAllResponses = async (req, res, next) => {
	try { 
		const [responses, _] = await Response.findAll();
		res.status(200).json({responses});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.createResponse = async (req, res, next) => { 
	try {
		let {question_id, selectableOption_id, user_id, timeTookInSec, answerText} = req.body;
		let response = new Response(question_id, selectableOption_id, user_id, timeTookInSec, answerText);
		response = await response.save();
		res.status(201).json({message: "Response Created", question_id: question_id, selectableOption_id: selectableOption_id, user_id: user_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};