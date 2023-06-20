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
const Survey_genre = require('../models/Survey_genre');
exports.getAllSurvey_genres = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [survey_genres, _] = yield Survey_genre.findAll();
        // res.status(200).json({count: survey_genres.length, survey_genres});
        res.status(200).json({ survey_genres });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createSurvey_genre = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { genre_id, survey_id } = req.body;
        let survey_genre = new Survey_genre(genre_id, survey_id);
        survey_genre = yield survey_genre.save();
        res.status(201).json({ message: "survey_genre created", survey_id: survey_id, genre_id: genre_id });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getGenresBySurveyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let survey_id = req.params.survey_id;
        let [genres, _] = yield Survey_genre.findGenresBySurveyId(survey_id);
        // res.status(200).json({count: genres.length, genres});
        res.status(200).json({ genres });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSurveysByGenreId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let genre_id = req.params.genre_id;
        let [surveys, _] = yield Survey_genre.findSurveysByGenreId(genre_id);
        res.status(200).json({ count: surveys.length, surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
