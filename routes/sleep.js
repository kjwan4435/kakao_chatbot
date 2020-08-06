const sleepRouter = require("express").Router();

let sleep = require("../models/sleep.model");

sleepRouter.route("/1").post((req, res) => {
  const question = req.body.intent.name;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const time = new Date().toLocaleDateString("en-US");

  const Answer = new sleep({
    question,
    answer,
    id,
    time
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  const responseBody = {
    quickReplies: [
      {
        type: "text",
        label: "quick",
        message: "message",
        data: {}
      },
      {
        type: "url",
        label: "",
        message: "message",
        data: {
          url: ""
        }
      }
    ]
  };

  res.status(200).send(responseBody);
});

module.exports = sleepRouter;
