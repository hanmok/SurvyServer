// server.js

require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const surveyRoute = require('./routes/surveyRoute');
const user_surveyRoute = require('./routes/user_surveysRoute');
const tagRoute = require('./routes/tagRoute');
const user_tagRoute = require('./routes/user_tagRoute')
const survey_tagRoute = require('./routes/survey_tagRoute');
// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
// app.use("/posts", require("./routes/postRoute"));
app.use('/users', userRoute);
app.use('/surveys', surveyRoute);
app.use('/user_surveys', user_surveyRoute);
app.use('/user_tags', user_tagRoute);
app.use('/survey_tags', survey_tagRoute);
app.use('/tags', tagRoute);

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
