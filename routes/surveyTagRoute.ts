// /surveys

const express = require('express');
const router = express.Router();
const survey_tagController = require('../controllers/survey_tagController');

router.route("/")
.get(survey_tagController.findAll);

module.exports = router;

export {};
