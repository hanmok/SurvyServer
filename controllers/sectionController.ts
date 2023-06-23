const Section = require('../models/Section');

exports.createSection = async (req, res, next) => { 
	try { 
		// let {survey_id, expectedTimeInMin} = req.body;
		let {title, survey_id, sequence} = req.body;
		// let section = new Section(survey_id, expectedTimeInMin);
		let section = new Section(title, survey_id, sequence);
		section = await section.save();
		res.status(201).json({message: "Section created", id: section[0].insertId});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getSectionById = async (req, res, next) => { 
	try { 
		let sectionId = req.params.id;
		let [section, _] = await Section.findById(sectionId);
		res.status(200).json({section: section[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getAllSections = async (req, res, next) => { 
	try { 
		const [sections, _] = await Section.findAll();
		res.status(200).json({sections});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

export {};