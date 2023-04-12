const Survey_tag = require('../models/Survey_tag');

exports.getAllSurvey_tags = async (req, res, next) => { 
	try { 
		const [survey_tags, _] = await Survey_tag.findAll();
		res.status(200).json({count: survey_tags.length, survey_tags});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createSurvey_tag = async(req, res, next) => { 
	try { 
		let {tag_id, survey_id} = req.body;
		let survey_tag = new Survey_tag(tag_id, survey_id);
		survey_tag = await survey_tag.save();
		res.status(201).json({message: "survey_tag created"})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getByTagId = async(req, res, next) => { 
	try { 
		let tag_id = req.params.tag_id;
		let [surveys, _] = await Survey_tag.findByTagId(tag_id);
		res.status(200).json({surveys: surveys[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

