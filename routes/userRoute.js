"use strict";
// /users
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userController = require('../controllers/userController');
const user_genreController = require('../controllers/user_genreController');
const postController = require('../controllers/postController');
const participateController = require('../controllers/participateController');
const router = express.Router();
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);
router.route("/login")
    .post(userController.login);
router.route("/:id")
    .get(userController.getUserById);
// Genres
router.route("/:user_id/genres")
    .get(user_genreController.getGenresByUserId);
router.route("/:user_id/genres/:genre_id")
    .post(user_genreController.createUser_genre);
// posted Surveys
router.route('/:user_id/posted-surveys')
    .get(postController.getPostedSurveysByUserId);
// user ~ posted-survey
router.route('/posted-survey')
    .post(postController.create_post);
// Joined surveys
// router.route('/:user_id/participate-surveys')
// .get(responseController.getParticipatedSurveysByUserId);
// router.route('/:user_id/participate-surveys/:survey_id')
// .get(participateController.getParticipatedSurveysByUserId)
// .post(participateController.createparticipate);
router.route('/:user_id/participated-surveys')
    .get(participateController.getParticipatedSurveysByUserId);
// 여기 문제 있음  아직 만들지 않은 Controller Function 이니까..
// router.route('/:user_id/participate-surveys/:survey_id')
// .post(postController.createparticipate); 
module.exports = router;
