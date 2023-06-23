
const User_genre = require('../models/User_genre');
// const Genre = require('../models/Genre')


exports.getAllUser_genres = async (req, res, next) => { 
	try { 
		const [user_genres, _] = await User_genre.findAll();
		res.status(200).json({user_genres});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};


exports.getGenresByUserId = async (req, res, next) => { 
	try { 
		let user_id = req.params.user_id;
		console.log(`current user_id by getGenresByUserId: ${user_id}`);
		let [genres, _] = await User_genre.findGenresByUserId(user_id);
		res.status(200).json({genres});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getUsersByGenreId = async (req, res, next) => { 
	try { 
		let genre_id= req.params.genre_id;
		let [users, _] = await User_genre.findUsersByGenreId(genre_id);
		res.status(200).json({users});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.createUser_genre = async (req, res, next) => { 
	try { 
		let {user_id, genre_id} = req.params;
		let user_genre = new User_genre(user_id, genre_id);
		user_genre = await user_genre.save();
		res.status(201).json({"message": "user_genre created", user_id: user_id, genre_id: genre_id});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

export {};