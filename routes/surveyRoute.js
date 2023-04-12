const express = require('express');
const surveyController = require('../controllers/surveyController');
const router = express.Router();

router.route("/")
.get(surveyController.getAllSurveys)
.post(surveyController.createSurvey);

router.route("/:id")
.get(surveyController.getSurveyById);

module.exports = router;