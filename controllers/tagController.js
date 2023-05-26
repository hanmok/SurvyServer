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
const Tag = require('../models/Tag');
exports.getAllTags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [tags, _] = yield Tag.findAll();
        res.status(200).json({ tags });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createTag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name } = req.body;
        let tag = new Tag(name);
        tag = yield tag.save();
        res.status(201).json({ message: "Tag created", tagId: tag[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getTagById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tagId = req.params.id;
        let [tag, _] = yield Tag.findById(tagId);
        res.status(200).json({ user: tag[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
