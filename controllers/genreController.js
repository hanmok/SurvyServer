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
const Genre = require('../models/Genre');
exports.getAllGenres = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [genres, _] = yield Genre.findAll();
        res.status(200).json({ genres });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createGenre = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name } = req.body;
        console.log(`name: ${name}, req.body: ${req.body}`);
        let genre = new Genre(name);
        genre = yield genre.save();
        res.status(201).json({ message: "Genre created", genreId: genre[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getGenreById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let genreId = req.params.id;
        let [genre, _] = yield Genre.findById(genreId);
        res.status(200).json({ user: genre[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
