"use strict";
// /questions
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const questionController = require('../controllers/questionController');
const router = express.Router();
router.route("/")
    .get(questionController.getAllQuestions)
    .post(questionController.createQuestion);
router.route("/:id")
    .get(questionController.getQuestionById);
module.exports = router;
