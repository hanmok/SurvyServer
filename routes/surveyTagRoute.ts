// /surveys

const express = require('express');
const router = express.Router();
const survey_genreController = require('../controllers/survey_genreController');

router.route("/")
.get(survey_genreController.getAllSurvey_genres);

module.exports = router;

export {};
