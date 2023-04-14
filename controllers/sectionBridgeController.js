const SectionBridge = require('../models/sectionBridge');


exports.getAllSectionBridges = async (req, res, next) => { 
	try { 
		const [sectionBridges, _] = await SectionBridge.findAll();
		res.status(200).json({count: sectionBridges.length, sectionBridges});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createSectionBridge = async (req, res, next) => { 
	try { 
		// let {username, password, age, isMale} = req.body;
		let {current_id, next_id, question_id, separation_answer_index} = req.body;
		let sectionBridge = new SectionBridge(current_id, next_id, question_id, separation_answer_index);
		sectionBridge = await sectionBridge.save();
		res.status(201).json({message: "sectionBridge created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};