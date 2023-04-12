const express = require('express');
const router = express.Router();
const user_surveyController = require('../controllers/User_surveyController');

router.route("/")
// .get(surveyController.getAllSurveys)
.get(user_surveyController.getAllUser_surveys)
.post(user_surveyController.createUser_survey);

router.route("/:user_id")
.get(user_surveyController.getByUserId);

module.exports = router;