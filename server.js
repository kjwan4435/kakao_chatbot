const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");
const enterRouter = require("./routes/enter");
const activityRouter = require("./routes/activity");
const foodRouter = require("./routes/food");
const moodRouter = require("./routes/mood");
const sleepRouter = require("./routes/sleep");
const socialRouter = require("./routes/social");

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/enter", enterRouter);
app.use("/activity", activityRouter);
// app.use("/food", foodRouter);
// app.use("/mood", moodRouter);
// app.use("/sleep", sleepRouter);
// app.use("/social", socialRouter);

app.use("/api", apiRouter);

app.listen(PORT, function () {
  console.log(`KAKAO CHATBOT SERVER IS RUNNING ON ${PORT}`);
});
