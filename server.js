"use strict";
// server.js
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const surveyRoute = require('./routes/surveyRoute');
const user_surveyRoute = require('./routes/user_surveysRoute');
const tagRoute = require('./routes/tagRoute');
const user_tagRoute = require('./routes/user_tagRoute');
const survey_tagRoute = require('./routes/survey_tagRoute');
const questionTypeRoute = require('./routes/questionTypeRoute');
const selectableOptionRoute = require('./routes/selectableOptionRoute');
const sectionRoute = require('./routes/sectionRoute');
const questionRoute = require('./routes/questionRoute');
const answerRoute = require('./routes/answerRoute');
const sectionBridgeRoute = require('./routes/sectionBridgeRoute');
const question_questionOptionRoute = require('./routes/question_questionOptionRoute');
// Middleware
app.use(express.json()); // parse json bodies in the request object
// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use('/users', userRoute);
app.use('/surveys', surveyRoute);
// app.use('/user-surveys', user_surveyRoute);
// app.use('/user_tags', user_tagRoute);
// app.use('/survey_tags', survey_tagRoute);
app.use('/tags', tagRoute);
app.use('/question-types', questionTypeRoute);
app.use('/selectable-options', selectableOptionRoute);
app.use('/sections', sectionRoute);
app.use('/questions', questionRoute);
app.use('/answers', answerRoute);
app.use('/section-bridges', sectionBridgeRoute);
// app.use('/question-question-options', question_questionOptionRoute);
// app.use
// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: "Something went really wrong",
    });
});
// Listen on pc port
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
