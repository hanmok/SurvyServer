const questionOption = require('../models/QuestionOption')

exports.createQuestionOption = async (req, res, next) => { 
	try { 
		let {position, value} = req.body;
		let question_option = new questionOption(position, value);
		question_option = await question_option.save();
		res.status(201).json({message: "Question Option created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

// exports.getQuestionOptionById = async (req, res, next) => { 
// 	try { 
// 		let question_option_id = req.params.id;
// 		let [question_option, _] = await questionOption.findById(question_option_id);
// 		res.status(200).json({question_option: question_option[0]});
// 	} catch (error) { 
// 		console.log(error);
// 		next(error);
// 	}
// }