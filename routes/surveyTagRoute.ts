// /surveys

const express = require('express');
const router = express.Router();
// const surveyController = require('../controllers/surveyController');
// const postController = require('../controllers/postController');
const survey_tagController = require('../controllers/survey_tagController');
// const participateController = require('../controllers/participateController');

router.route("/")
.get(survey_tagController.findAll);

// router.route("/")
// .get(surveyController.getAllSurveys)
// .post(surveyController.createSurvey);

// router.route("/:id")
// .get(surveyController.getSurveyById);

// // User, Posted Surveys
// // router.route("/:survey_id/users")
// // .get(postController.getUserByPostedSurveyId)

// router.route("/:survey_id/posted-user")
// .get(postController.getUserByPostedSurveyId)

// // User, Participated Surveys
// router.route("/:survey_id/participated-users")
// .get(participateController.getParticipatedUsersBySurveyId)

// router.route("/:survey_id/participated-users/:user_id")
// .post(participateController.createParticipate)

// // Tag
// router.route("/:survey_id/tags")
// .get(survey_tagController.getTagsBySurveyId);

// router.route("/tags")
// .post(survey_tagController.createSurvey_tag);


module.exports = router;

export {};
