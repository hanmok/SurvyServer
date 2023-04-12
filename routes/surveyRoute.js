const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.route("/")
.get(surveyController.getAllSurveys)
.post(surveyController.createSurvey);

router.route("/:id")
.get(surveyController.getSurveyById);

module.exports = router;