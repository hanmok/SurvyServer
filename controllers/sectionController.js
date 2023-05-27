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
const Section = require('../models/Section');
exports.createSection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let {survey_id, expectedTimeInMin} = req.body;
        let { title, survey_id } = req.body;
        // let section = new Section(survey_id, expectedTimeInMin);
        let section = new Section(title, survey_id);
        section = yield section.save();
        res.status(201).json({ message: "Section created", id: section[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSectionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sectionId = req.params.id;
        let [section, _] = yield Section.findById(sectionId);
        res.status(200).json({ section: section[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllSections = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [sections, _] = yield Section.findAll();
        res.status(200).json({ count: sections.length, sections });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
