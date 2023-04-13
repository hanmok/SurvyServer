const Response = require('../models/Response');

exports.getAllResponses = async (req, res, next) => { 
	try { 
		const [responses, _] = await Response.findAll();
		res.status(200).json({count: responses.length, responses});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createResponse = async (req, res, next) => { 
	try { 
		let {user_id, survey_id} = req.body;
		let response = new Response(user_id, survey_id);
		response = await response.save();
		res.status(201).json({message: "Response Created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};


exports.getResponseById = async (req, res, next) => { 
	try { 
		let response_id = req.params.id;
		let [response, _] = await Response.findById(response_id);
		res.status(200).json({response: response[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};


