
const express = require('express');
// const oneAnswerController = require('../controllers/oneAnswerController');
const oneAnswerController = require('../controllers/oneAnswerController');
const router = express.Router();

router.route("/")
.get(oneAnswerController.getAllOneAnswers)
.post(oneAnswerController.createOneAnswer);

router.route("/:id")
.get(oneAnswerController.getOneAnswerById);

module.exports = router;