// /question-types

const express = require('express');
const questionTypeController = require('../controllers/questionTypeController');
const router = express.Router();

router.route("/")
.get(questionTypeController.getAllQuestionTypes)
.post(questionTypeController.createQuestionType);

module.exports = router;

export {};