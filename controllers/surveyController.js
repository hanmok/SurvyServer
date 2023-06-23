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
const Survey = require('../models/Survey');
const Post = require('../models/Post');
exports.getAllSurveys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [surveys, _] = yield Survey.findAll();
        res.status(200).json({ surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createSurvey = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let {title, participationGoal, reward_range, user_id} = req.body;
        let { title, participationGoal, user_id } = req.body;
        // let survey = new Survey(title, participationGoal, reward_range);
        let survey = new Survey(title, participationGoal);
        survey = yield survey.save();
        let survey_id = survey[0].insertId;
        let post = new Post(user_id, survey_id);
        post = yield post.save();
        res.status(201).json({ message: "Survey created", id: survey[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSurveyById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let surveyId = req.params.id;
        let [survey, _] = yield Survey.findById(surveyId);
        res.status(200).json({ survey: survey[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
