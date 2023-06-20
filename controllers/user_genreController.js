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
const User_genre = require('../models/User_genre');
// const Genre = require('../models/Genre')
exports.getAllUser_genres = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user_genres, _] = yield User_genre.findAll();
        res.status(200).json({ count: user_genres.length, user_genres });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getGenresByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.user_id;
        console.log(`current user_id by getGenresByUserId: ${user_id}`);
        let [genres, _] = yield User_genre.findGenresByUserId(user_id);
        res.status(200).json({ count: genres.length, genres });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getUsersByGenreId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let genre_id = req.params.genre_id;
        let [users, _] = yield User_genre.findUsersByGenreId(genre_id);
        res.status(200).json({ count: users.length, users });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createUser_genre = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { user_id, genre_id } = req.params;
        let user_genre = new User_genre(user_id, genre_id);
        user_genre = yield user_genre.save();
        res.status(201).json({ "message": "user_genre created", user_id: user_id, genre_id: genre_id });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
