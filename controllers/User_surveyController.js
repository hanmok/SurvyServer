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
const User_survey = require('../models/User_survey');
exports.getAllUser_surveys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user_surveys, _] = yield User_survey.findAll();
        res.status(200).json({ count: user_surveys.length, user_surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSurveysByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.user_id;
        let [surveys, _] = yield User_survey.findByUserId(user_id);
        // res.status(200).json({surveys: surveys[0]});
        res.status(200).json({ count: surveys.length, surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getUserBySurveyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let survey_id = req.params.survey_id;
        let [user, _] = yield User_survey.findBySurveyId(survey_id);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createUser_survey = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let {user_id, survey_id} = req.body;
        let { user_id, survey_id } = req.params;
        let user_survey = new User_survey(user_id, survey_id);
        user_survey = yield user_survey.save();
        res.status(201).json({ message: "user_survey created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
