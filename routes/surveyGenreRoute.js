"use strict";
// /surveys
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const survey_genreController = require('../controllers/survey_genreController');
router.route("/")
    .get(survey_genreController.getAllSurvey_genres);
module.exports = router;
