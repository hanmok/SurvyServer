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
const Response = require('../models/Response');
exports.getAllResponses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, _] = yield Response.findAll();
        res.status(200).json({ count: responses.length, responses });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { question_id, selectableOption_id, user_id, timeTookInSec, answerText } = req.body;
        let response = new Response(question_id, selectableOption_id, user_id, answerText, timeTookInSec);
        response = yield response.save();
        res.status(201).json({ message: "Response Created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
