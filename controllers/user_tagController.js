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
const User_tag = require('../models/User_tag');
// const Tag = require('../models/Tag')
exports.getAllUser_tags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user_tags, _] = yield User_tag.findAll();
        res.status(200).json({ count: user_tags.length, user_tags });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getTagsByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.user_id;
        console.log(`current user_id by getTagsByUserId: ${user_id}`);
        let [tags, _] = yield User_tag.findTagsByUserId(user_id);
        res.status(200).json({ count: tags.length, tags });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getUsersByTagId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tag_id = req.params.tag_id;
        let [users, _] = yield User_tag.findUsersByTagId(tag_id);
        res.status(200).json({ count: users.length, users });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createUser_tag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { user_id, tag_id } = req.params;
        let user_tag = new User_tag(user_id, tag_id);
        user_tag = yield user_tag.save();
        res.status(201).json({ "message": "user_tag created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
