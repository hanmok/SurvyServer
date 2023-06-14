"use strict";
// /surveys
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const survey_tagController = require('../controllers/survey_tagController');
router.route("/")
    .get(survey_tagController.getAllSurvey_tags);
module.exports = router;
