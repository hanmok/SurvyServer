
const Genre = require('../models/Genre');

exports.getAllGenres = async (req, res, next) => { 
	try { 
		const [genres, _] = await Genre.findAll();
		res.status(200).json({genres})
	} catch (error) {
		console.log(error);
		next(error);
	}
}

exports.createGenre = async (req, res, next) => { 
	try { 
		let {name} = req.body;
		console.log(`name: ${name}, req.body: ${req.body}`)
		let genre = new Genre(name);
		genre = await genre.save();
		res.status(201).json({message: "Genre created", genreId: genre[0].insertId});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.getGenreById = async (req, res, next) => { 
	try { 
		let genreId = req.params.id;
		let [genre, _] = await Genre.findById(genreId);
		res.status(200).json({user: genre[0]});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};