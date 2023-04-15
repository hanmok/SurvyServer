const SelectableOption = require('../models/SelectableOption')

exports.createSelectableOption = async (req, res, next) => { 
	try { 
		let {question_id, position, value} = req.body;
		let selectableOption = new SelectableOption(question_id, position, value);
		selectableOption = await selectableOption.save();
		res.status(201).json({message: "selectableOption created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getAllSelectableOptions = async (req, res, next) => { 
	try { 
		const [selectableOptions, _] = await SelectableOption.findAll();
		res.status(200).json({count: selectableOptions.length, selectableOptions});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

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