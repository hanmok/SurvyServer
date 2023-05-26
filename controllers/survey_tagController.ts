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
		res.status(201).json({message: "survey_tag created", survey_tagInfo: survey_tag})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getTagsBySurveyId = async (req, res, next) => { 
	try { 
		let survey_id = req.params.survey_id;
		let [tags, _] = await Survey_tag.findTagsBySurveyId(survey_id);
		res.status(200).json({count: tags.length, tags});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getSurveysByTagId = async (req, res, next) => { 
	try { 
		let tag_id = req.params.tag_id;
		let [surveys, _] = await Survey_tag.findSurveysByTagId(tag_id);
		res.status(200).json({count: surveys.length, surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};