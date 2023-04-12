const express = require('express');
const router = express.Router();
const survey_tagController = require('../controllers/survey_tagController');

router.route("/")
.get(survey_tagController.getAllSurvey_tags)
.post(survey_tagController.createSurvey_tag);

router.route("/:tag_id")
.get(survey_tagController.getByTagId);

module.exports = router;