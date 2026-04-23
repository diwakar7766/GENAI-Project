
const cors = require('cors');
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

//  require all the routes heree
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.route")

//  using all the routs here
app.use("/api/auth",authRouter);
app.use("/api/interview",interviewRouter);

module.exports = app