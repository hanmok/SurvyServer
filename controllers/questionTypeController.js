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
const QuestionType = require('../models/QuestionType');
exports.createQuestionType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id, description } = req.body;
        let questionType = new QuestionType(id, description);
        questionType = yield questionType.save();
        res.status(201).json({ message: "QuestionType created", id: questionType[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllQuestionTypes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [questionTypes, _] = yield QuestionType.findAll();
        res.status(200).json({ count: questionTypes.length, questionTypes });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
