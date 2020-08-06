const sleepRouter = require("express").Router();

let result = require("../models/answer.model");

sleepRouter.route("/1").post((req, res) => {
  const question = req.body.intent.name;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const date = new Date().toLocaleDateString("en-US");

  const Answer = new result({
    question,
    answer,
    id,
    date
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  let sentence = "기본값"

  if (answer === "테스트1") {
    sentence = "사랑해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  }

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `${sentence}`;
          }
        },
        {
          simpleText: {
            text:
              "Q. 최근 일주일동안 하루에 잠은 평균 얼마나 주무셨나요?\n\n1. 4시간 이하\n2. 4-6시간\n3. 6-8시간\n4. 8-10시간\n5. 10시간 이하"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "4시간도 못 잤어",
          action: "message",
          label: "1"
        },
        {
          messageText: "4-6시간 정도 잔 것 같아.",
          action: "message",
          label: "2"
        },
        {
          messageText: "6-8시간 정도 잤어!",
          action: "message",
          label: "3"
        },
        {
          messageText: "음.. 8-10시간 정도?",
          action: "message",
          label: "4"
        },
        {
          messageText: "10시간도 넘게 잤어!",
          action: "message",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = sleepRouter;
