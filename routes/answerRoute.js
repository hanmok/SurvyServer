
const express = require('express');
// const userController = require('../controllers/userController');
const answerController = require('../controllers/answerController');
const router = express.Router();

router.route("/")
.get(answerController.getAllAnswers)
.post(answerController.createAnswer);

router.route("/:id")
.get(answerController.getAnswerById);

module.exports = router;