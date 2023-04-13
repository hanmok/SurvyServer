
const express = require('express');
const questionOptionController = require('../controllers/questionOptionController');
const router = express.Router();

router.route("/")
.post(questionOptionController.createQuestionOption);

router.route("/:id")
.get(questionOptionController.getQuestionOptionById);

module.exports = router;
