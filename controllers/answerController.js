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
const Answer = require('../models/Answer');
exports.getAllAnswers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [answers, _] = yield Answer.findAll();
        res.status(200).json({ count: answers.length, answers });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { question_id, user_id, selectableOption_id, textAnswer, timeTookInSec } = req.body;
        let answer = new Answer(question_id, user_id, selectableOption_id, textAnswer, timeTookInSec);
        answer = yield answer.save();
        res.status(201).json({ message: "Answer created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAnswerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let answerId = req.params.id;
        let [answer, _] = yield Answer.findById(answerId);
        res.status(200).json({ answer: answer[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
