var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const User = require('../models/User');
const RefreshToken = require('../models/Refresh_Token');
const jwt = require('jsonwebtoken');
// 관리자용
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
        let createdId = user[0].insertId;
        let [createdUser, _] = yield User.findById(createdId);
        res.status(200).json({ user: createdUser[0], accessToken: "" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
// User.login 에서 해당 유저가 존재하는지 확인 필요. 
exports.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        let myUser = { name: username };
        const accessToken = generateAccessToken(myUser);
        const refreshToken = generateRefreshToken(myUser);
        // refreshToken 은 DB 에 따로 처리하기. 
        let [user, _] = yield User.login(username, password); // user 가 있을수도, 없을수도.. 확인 필요. 
        let newRefreshToken = new RefreshToken(username, refreshToken);
        newRefreshToken = yield newRefreshToken.save(); // 여기서 에러 생길 수 있음.
        res.status(200).json({ user: user[0], accessToken: accessToken, refreshToken: refreshToken });
    }
    catch (error) {
        console.log(error);
        // next(error);
        res.status(403).json({ message: "refresh Token exists" });
    }
});
// Access Token 도 무효화 시키기, 이때, Token 체크 해야함. 
exports.logout = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        // accessToken 확인해야함. 
        let { username } = req.body;
        let _ = yield RefreshToken.delete(username);
        res.status(200).json({ message: `refresh token deleted, username: '${username} has logged out.` });
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
exports.regenerateAccessToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { username, refreshToken } = req.body;
        let [validRefreshToken, _] = yield RefreshToken.find(username, refreshToken);
        let isEmpty = validRefreshToken.length === 0;
        if (!isEmpty) { // refreshToken 존재 시, accessToken 발급 후 return
            let myUser = { name: username };
            let accessToken = generateAccessToken(myUser);
            let [user, _] = yield User.findByUsername(username);
            res.status(201).json({ user: user[0], accessToken: accessToken });
        }
        else {
            res.status(400).json({ message: "Token expired." });
        }
    }
    catch (error) {
        console.log(error);
        next(error);
        // dd
    }
});
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}
function generateRefreshToken(user) {
    // return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '180d'})
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}
// 이거.. 어떻게 바꿔야하지? 
function authenticateToken(req, res, next) {
    // form:: Bearer Token 
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader && authHeader.split(' ')[1];
    if (accessToken == null)
        return res.sendStatus(401);
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403); // no longer valid
        req.user = user;
        next();
    });
}
