const Survey_genre = require('../models/Survey_genre');

exports.getAllSurvey_genres = async (req, res, next) => { 
	try { 
		const [survey_genres, _] = await Survey_genre.findAll();
		// res.status(200).json({count: survey_genres.length, survey_genres});
		res.status(200).json({survey_genres});
	} catch (error) { 
		console.log(error); 
		next(error);
	}
};

exports.createSurvey_genre = async(req, res, next) => { 
	try { 
		let {genre_id, survey_id} = req.body;
		let survey_genre = new Survey_genre(genre_id, survey_id);
		survey_genre = await survey_genre.save();
		res.status(201).json({message: "survey_genre created", survey_id: survey_id, genre_id: genre_id})
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getGenresBySurveyId = async (req, res, next) => { 
	try { 
		let survey_id = req.params.survey_id;
		let [genres, _] = await Survey_genre.findGenresBySurveyId(survey_id);
		// res.status(200).json({count: genres.length, genres});
		res.status(200).json({genres}); 
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getSurveysByGenreId = async (req, res, next) => { 
	try { 
		let genre_id = req.params.genre_id;
		let [surveys, _] = await Survey_genre.findSurveysByGenreId(genre_id);
		res.status(200).json({count: surveys.length, surveys});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};