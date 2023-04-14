
const express = require('express');
// const userController = require('../controllers/userController');
const oneQuestionController = require('../controllers/oneQuestionController');
const router = express.Router();

router.route("/")
.get(oneQuestionController.getAllOneQuestions)
.post(oneQuestionController.createOneQuestion);

router.route("/:id")
.get(oneQuestionController.getOneQuestionById);

module.exports = router;