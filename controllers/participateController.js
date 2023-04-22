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
const Request = require('../models/participate');
// exports.getAllparticipates = async (req, res, next) => { 
// 	try { 
// 		const [participates, _] = await Request.findAll();
// 		res.status(200).json({count: participates.length, participates});
// 	} catch (error) {
// 		console.log(error);
// 		next(error);
// 	}
// }
exports.getParticipatedSurveysByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.user_id;
        let [surveys, _] = yield Request.findByUserId(user_id);
        // res.status(200).json({surveys: surveys[0]});
        res.status(200).json({ count: surveys.length, surveys });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getParticipatedUsersBySurveyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let survey_id = req.params.survey_id;
        let [user, _] = yield Request.findBySurveyId(survey_id);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createparticipate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { user_id, survey_id } = req.params;
        let participate = new Request(user_id, survey_id);
        participate = yield participate.save();
        res.status(201).json({ message: "participate created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
