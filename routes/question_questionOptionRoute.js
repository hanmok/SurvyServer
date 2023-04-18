"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const question_questionOptionController = require('../controllers/question_QuestionOptionController');
router.route("/")
    .get(question_questionOptionController.getAllQuestion_QuestionOptions)
    .post(question_questionOptionController.createQuestion_QuestionOption);
module.exports = router;
