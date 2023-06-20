"use strict";
// /genres
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const genreController = require('../controllers/genreController');
const userGenreController = require('../controllers/user_genreController');
const survey_genreController = require('../controllers/survey_genreController');
const router = express.Router();
router.route("/")
    .get(genreController.getAllGenres)
    .post(genreController.createGenre);
router.route('/:id')
    .get(genreController.getGenreById);
router.route('/:genre_id/users')
    .get(userGenreController.getUsersByGenreId);
router.route('/:genre_id/surveys')
    .get(survey_genreController.getSurveysByGenreId);
router.route('/genres/:genre_id/surveys/:survey_id')
    .post(survey_genreController.createSurvey_genre);
module.exports = router;
