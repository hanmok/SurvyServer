
const Tag = require('../models/Tag');

exports.getAllTags = async (req, res, next) => { 
	try { 
		const [tags, _] = await Tag.findAll();
		res.status(200).json({tags})
	} catch (error) {
		console.log(error);
		next(error);
	}
}

exports.createTag = async (req, res, next) => { 
	try { 
		let {name} = req.body;
		console.log(`name: ${name}, req.body: ${req.body}`)
		let tag = new Tag(name);
		tag = await tag.save();
		res.status(201).json({message: "Tag created", tagId: tag[0].insertId});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getTagById = async (req, res, next) => { 
	try { 
		let tagId = req.params.id;
		let [tag, _] = await Tag.findById(tagId);
		res.status(200).json({user: tag[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};