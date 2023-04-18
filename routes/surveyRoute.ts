const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const user_surveyController = require('../controllers/user_surveyController');
const survey_tagController = require('../controllers/survey_tagController');

router.route("/")
.get(surveyController.getAllSurveys)
.post(surveyController.createSurvey);

router.route("/:id")
.get(surveyController.getSurveyById);

// User
router.route("/:survey_id/users")
.get(user_surveyController.getUserBySurveyId)


// Tag
router.route("/:survey_id/tags")
.get(survey_tagController.getTagsBySurveyId);

module.exports = router;

export {};
