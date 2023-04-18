
const express = require('express');
const userController = require('../controllers/userController');
const user_tagController = require('../controllers/user_tagController');
const user_surveyController = require('../controllers/user_surveyController');
const router = express.Router();

router.route("/")
.get(userController.getAllUsers)
.post(userController.createUser);

router.route("/:id")
.get(userController.getUserById);

// Tags
router.route("/:user_id/tags")
.get(user_tagController.getTagsByUserId);

router.route("/:user_id/tags/:tag_id")
.post(user_tagController.createUser_tag);

// Surveys
router.route('/:user_id/surveys')
.get(user_surveyController.getSurveysByUserId)

module.exports = router;

export {};