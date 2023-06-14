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
const Survey_tag = require('../models/Survey_tag');
exports.getAllSurvey_tags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [survey_tags, _] = yield Survey_tag.findAll();
        // res.status(200).json({count: survey_tags.length, survey_tags});
        res.status(200).json({ survey_tags });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createSurvey_tag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { tag_id, survey_id } = req.body;
        let survey_tag = new Survey_tag(tag_id, survey_id);
        survey_tag = yield survey_tag.save();
        res.status(201).json({ message: "survey_tag created", survey_id: survey_id, tag_id: tag_id });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getTagsBySurveyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let survey_id = req.params.survey_id;
        let [tags, _] = yield Survey_tag.findTagsBySurveyId(survey_id);
        // res.status(200).json({count: tags.length, tags});
        res.status(200).json({ tags });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSurveysByTagId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tag_id = req.params.tag_id;
        let [surveys, _] = yield Survey_tag.findSurveysByTagId(tag_id);
        res.status(200).json({ count: surveys.length, surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
