// /surveys

const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const postController = require('../controllers/postController');
const survey_genreController = require('../controllers/survey_genreController');
const participateController = require('../controllers/participateController');


router.route("/")
.get(surveyController.getAllSurveys)
.post(surveyController.createSurvey);

router.route("/:id")
.get(surveyController.getSurveyById);

// User, Posted Surveys
// router.route("/:survey_id/users")
// .get(postController.getUserByPostedSurveyId)

 router.route("/:survey_id/posted-user")
.get(postController.getUserByPostedSurveyId)

// User, Participated Surveys
router.route("/:survey_id/participated-users")
.get(participateController.getParticipatedUsersBySurveyId)

// router.route("/:survey_id/participated-users/:user_id")
// .post(participateController.createParticipate)

router.route("/participated-users")
.post(participateController.createParticipate)

// Genre
router.route("/:survey_id/genres")
.get(survey_genreController.getGenresBySurveyId);

router.route("/genres")
.post(survey_genreController.createSurvey_genre);


module.exports = router;

export {};
