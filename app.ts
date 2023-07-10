// server.js

require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

const jwt = require('jsonwebtoken');

const userRoute = require("./routes/userRoute");
const surveyRoute = require('./routes/surveyRoute');
// const requestRoute = require('./routes/requestsRoute');
const genreRoute = require('./routes/genreRoute');
const questionTypeRoute = require('./routes/questionTypeRoute');
const selectableOptionRoute = require('./routes/selectableOptionRoute');
const sectionRoute = require('./routes/sectionRoute');

const questionRoute = require('./routes/questionRoute');
const answerRoute = require('./routes/answerRoute');
const sectionBridgeRoute = require('./routes/sectionBridgeRoute');
const question_questionOptionRoute = require('./routes/question_questionOptionRoute');
const responseRoute = require('./routes/ResponseRoute')
const surveyGenreRoute = require('./routes/surveyGenreRoute')

// Middleware
app.use(express.json()); // parse json bodies in the request object

app.use('/users', userRoute); // 여기에 두어야 authenticateToken 적용되지 않음 

// AccessToken check 
app.use(authenticateToken);

// Redirect requests to endpoint starting with /posts to postRoutes.js 

app.use('/surveys', surveyRoute);
app.use('/survey_genres', surveyGenreRoute);
app.use('/genres', genreRoute);
app.use('/question-types', questionTypeRoute);
app.use('/selectable-options', selectableOptionRoute);
app.use('/sections', sectionRoute);
app.use('/questions', questionRoute);
app.use('/answers', answerRoute);
app.use('/section-bridges', sectionBridgeRoute);
app.use('/responses', responseRoute);
// app.use('/question-question-options', question_questionOptionRoute);

app.get('/', (req, res) => { 
  res.send("hi, this is home.");
})

app.get('/test', (req, res) => { 
  res.send("hi, this is test");
})

// app.use
// Global Error Handler. IMPORTANT function params MUST start with err

app.use((err, req, res, next) => {
  console.log('path: ', req.path);
  console.log('method: ', req.method);

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
const PORT = process.env.PORT || 4000;
console.log(`port: ${PORT}`)
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

function authenticateToken(req, res, next) { 
  // form:: Bearer Token 
  const authHeader = req.headers["authorization"]
  const accessToken = authHeader && authHeader.split(' ')[1]
  if (accessToken == null) return res.sendStatus(401)

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => { 
    // 이걸 여기서 하는게 맞아? 음.. RefreshToken 도 봐야 할 것 같은데 ? 
    // 확인하고, accessToken 이 유효하지 않은 경우 refreshToken 뒤져본 후, 유효하면 재발급. 
    // 그 후에 같은 함수 다시 호출 할 수 있나 ? 여기서 가능할 것 같긴 한데... 음.. 

    if (err) return res.sendStatus(403) // no longer valid 403: 
    // if (err) { 
    //   generateAccessToken(user)
    // }
    req.user = user
    next()
  })
}

function generateAccessToken(user) { 
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

export {};