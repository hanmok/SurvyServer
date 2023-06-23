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
const Question_QuestionOption = require('../models/Question_QuestionOption');
exports.getAllQuestion_QuestionOptions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [question_questionOptions, _] = yield Question_QuestionOption.findAll();
        res.status(200).json({ question_questionOptions });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createQuestion_QuestionOption = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { question_id, questionOption_id } = req.body;
        let question_questionOption = new Question_QuestionOption(question_id, questionOption_id);
        question_questionOption = yield question_questionOption.save();
        res.status(201).json({ message: "question_questionOption created", question_questionOptionInfo: question_questionOption });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
