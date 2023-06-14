"use strict";
// /surveys
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const survey_tagController = require('../controllers/survey_tagController');
router.route("/")
    .get(survey_tagController.findAll);
module.exports = router;
