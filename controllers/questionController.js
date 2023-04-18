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
const Question = require('../models/Question');
exports.createQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { questionType_id, section_id, position, text } = req.body;
        console.log(`questionType_id: ${questionType_id}`);
        let question = new Question(questionType_id, section_id, position, text);
        question = yield question.save();
        res.status(201).json({ message: "Question Created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getQuestionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let questionId = req.params.id;
        let [question, _] = yield Question.findById(questionId);
        res.status(200).json({ question: question[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [questions, _] = yield Question.findAll();
        res.status(200).json({ count: questions.length, questions });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
