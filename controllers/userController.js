var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../models/User');
exports.getAllUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const [users, _] = yield User.findAll();
        res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        let user = new User(username, password);
        user = yield user.save();
        res.status(201).json({ message: "User created", id: user[0].insertId });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let userId = req.params.id;
        let [user, _] = yield User.findById(userId);
        res.status(200).json({ user: user[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        let userId = yield User.login(username, password);
        res.status(200).json({ id: userId[0] });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
