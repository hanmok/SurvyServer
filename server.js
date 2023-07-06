"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const userRoute = require("./routes/userRoute");
const surveyRoute = require('./routes/surveyRoute');
const genreRoute = require('./routes/genreRoute');
const questionTypeRoute = require('./routes/questionTypeRoute');
const selectableOptionRoute = require('./routes/selectableOptionRoute');
const sectionRoute = require('./routes/sectionRoute');
const questionRoute = require('./routes/questionRoute');
const answerRoute = require('./routes/answerRoute');
const sectionBridgeRoute = require('./routes/sectionBridgeRoute');
const responseRoute = require('./routes/ResponseRoute');
// Middleware
// app.use('auth')
// HTTP 요청의 본문(body) 를 파싱하여 JSON 형식으로 변환. (Javascript 객체로 변환)
app.use(express.json()); // parse json bodies in the request object
// Redirect requests to endpoint starting with /posts to postRoutes.js
// Auth middleWare
// app.use('/users', userRoute);
// app.use('/surveys', surveyRoute);
// app.use('/genres', genreRoute);
// app.use('/question-types', questionTypeRoute);
// app.use('/selectable-options', selectableOptionRoute);
// app.use('/sections', sectionRoute);
// app.use('/questions', questionRoute);
// app.use('/answers', answerRoute);
// app.use('/section-bridges', sectionBridgeRoute);
// app.use('/responses', responseRoute);
app.use('/users', authenticateToken, userRoute);
app.use('/surveys', authenticateToken, surveyRoute);
app.use('/genres', authenticateToken, genreRoute);
app.use('/question-types', authenticateToken, questionTypeRoute);
app.use('/selectable-options', authenticateToken, selectableOptionRoute);
app.use('/sections', authenticateToken, sectionRoute);
app.use('/questions', authenticateToken, questionRoute);
app.use('/answers', authenticateToken, answerRoute);
app.use('/section-bridges', authenticateToken, sectionBridgeRoute);
app.use('/responses', authenticateToken, responseRoute);
// 위 어떤 주소로도 연결되지 않는 경우 404 로 연결. 
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: "Something went really wrong",
        stack: err.stack,
        name: err.name
    });
});
// Listen on pc port
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}
const PORT = process.env.PORT || 4000;
console.log(`port: ${PORT}`);
setInterval(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}, 25 * 60 * 1000);
