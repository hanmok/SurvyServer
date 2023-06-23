"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post = require('../models/Post');
exports.getPostedSurveysByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.user_id;
        let [surveys, _] = yield Post.findByUserId(user_id);
        res.status(200).json({ surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getUserByPostedSurveyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let survey_id = req.params.survey_id;
        let [user, _] = yield Post.findBySurveyId(survey_id);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.create_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let {user_id, survey_id} = req.params;
        let { user_id, survey_id } = req.body;
        let post = new Post(user_id, survey_id);
        post = yield post.save();
        res.status(201).json({ message: "post created", survey_id: survey_id, user_id: user_id });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
