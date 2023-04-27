"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const surveyRoute = require('./routes/surveyRoute');
// const requestRoute = require('./routes/requestsRoute');
const tagRoute = require('./routes/tagRoute');
const questionTypeRoute = require('./routes/questionTypeRoute');
const selectableOptionRoute = require('./routes/selectableOptionRoute');
const sectionRoute = require('./routes/sectionRoute');
const questionRoute = require('./routes/questionRoute');
const answerRoute = require('./routes/answerRoute');
const sectionBridgeRoute = require('./routes/sectionBridgeRoute');
const question_questionOptionRoute = require('./routes/question_questionOptionRoute');
const responseRoute = require('./routes/ResponseRoute');
// Middleware
app.use(express.json()); // parse json bodies in the request object
// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use('/users', userRoute);
app.use('/surveys', surveyRoute);
// app.use('/user-surveys', requestRoute);
// app.use('/survey_tags', survey_tagRoute);
app.use('/tags', tagRoute);
app.use('/question-types', questionTypeRoute);
app.use('/selectable-options', selectableOptionRoute);
app.use('/sections', sectionRoute);
app.use('/questions', questionRoute);
app.use('/answers', answerRoute);
app.use('/section-bridges', sectionBridgeRoute);
app.use('/responses', responseRoute);
// app.use('/question-question-options', question_questionOptionRoute);
// app.use
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
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 4000;
console.log(`port: ${PORT}`);
setInterval(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}, 25 * 60 * 1000);
