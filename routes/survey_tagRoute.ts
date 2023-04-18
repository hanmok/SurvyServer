const express = require('express');
const router = express.Router();
const survey_tagController = require('../controllers/survey_tagController');

router.route("/")
.get(survey_tagController.getAllSurvey_tags)
.post(survey_tagController.createSurvey_tag);

module.exports = router;

export {};