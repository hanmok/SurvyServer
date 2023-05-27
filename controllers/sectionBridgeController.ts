const SectionBridge = require('../models/SectionBridge');


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
		let {current_id, next_id, question_id, selectableOption_id} = req.body;
		let sectionBridge = new SectionBridge(current_id, next_id, question_id, selectableOption_id);
		sectionBridge = await sectionBridge.save();
		res.status(201).json({message: "sectionBridge created", current_id: current_id, next_id: next_id, question_id: question_id, selectableOption_id: selectableOption_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};