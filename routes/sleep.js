const sleepRouter = require("express").Router();

let result = require("../models/answer.model");

sleepRouter.route("/0").post((req, res) => {
  const question = req.body.userRequest.block.name;
  const blockid = req.body.userRequest.block.id;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const date = new Date().toLocaleDateString("en-US");

  const Answer = new result({
    question,
    blockid,
    answer,
    id,
    date
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text:
              "Q. 주인님은 오늘 기분이 어떠신가요?\n\n1. 최악이야.\n2. 별로 좋지않아.\n3. 보통이야.\n4. 좋은 편이야.\n5. 완전 기분 좋아!!"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "오늘 기분 너무 안 좋은걸..",
          action: "message",
          label: "1"
        },
        {
          messageText: "오늘 기분 별로 안 좋아..",
          action: "message",
          label: "2"
        },
        {
          messageText: "오늘 기분 평범한걸?",
          action: "message",
          label: "3"
        },
        {
          messageText: "오늘 기분 좋은 편이야!",
          action: "message",
          label: "4"
        },
        {
          messageText: "오늘 기분 완전 좋아!!",
          action: "message",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

sleepRouter.route("/1").post((req, res) => {
  const question = req.body.userRequest.block.name;
  const blockid = req.body.userRequest.block.id;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const date = new Date().toLocaleDateString("en-US");

  const Answer = new result({
    question,
    blockid,
    answer,
    id,
    date
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  let sentence = "그러셨군요!";

  if (answer === "테스트1") {
    sentence = "사랑해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  }

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `${sentence}`
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

sleepRouter.route("/2").post((req, res) => {
  const question = req.body.userRequest.block.name;
  const blockid = req.body.userRequest.block.id;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const date = new Date().toLocaleDateString("en-US");

  const Answer = new result({
    question,
    blockid,
    answer,
    id,
    date
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  let sentence = "기본값";

  if (answer === "테스트1") {
    sentence = "사랑해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  }

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `${sentence}`
          }
        },
        {
          simpleText: {
            text:
              "Q. 최근에 잠에 몇시에 드시나요?\n\n1. 밤 9시 이전\n2. 밤 9시 - 밤 11시\n3. 밤 11시 - 새벽 1시\n4. 새벽 1시 - 새벽 3시\n5. 새벽 3시 이후"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "밤 9시 전에 잤던 것 같은데??",
          action: "message",
          label: "1"
        },
        {
          messageText: "음.. 9시에서 11시 사이 정도에 자는 편이야!",
          action: "message",
          label: "2"
        },
        {
          messageText: "밤 11시에서 새벽 1시 사이 정도에 잤어",
          action: "message",
          label: "3"
        },
        {
          messageText: "요즘 새벽 1시에서 3시 사이에 자는 편이야",
          action: "message",
          label: "4"
        },
        {
          messageText: "요즘 주로 새벽 3시 넘어서 자는 편이야..",
          action: "message",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

sleepRouter.route("/3").post((req, res) => {
  const question = req.body.userRequest.block.name;
  const blockid = req.body.userRequest.block.id;
  const answer = req.body.userRequest.utterance;
  const id = req.body.userRequest.user.id;
  const date = new Date().toLocaleDateString("en-US");

  const Answer = new result({
    question,
    blockid,
    answer,
    id,
    date
  });

  Answer.save()
    .then(() => console.log(Answer))
    .catch((err) => console.log(`Error: ${err}`));

  let sentence = "기본값";

  if (answer === "테스트1") {
    sentence = "사랑해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  } else if (answer === "테스트2") {
    sentence = "싫어해요";
  }

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `${sentence}`
          }
        },
        {
          simpleText: {
            text:
              "Q. 최근 일주일동안의 주인님의 수면 만족도는 어느정도인가요?\n\n1. 매우 불만족\n2. 다소 불만족\n3. 보통\n4. 다소 만족\n5. 매우 만족"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "완전 불만족스러워..",
          action: "message",
          label: "1"
        },
        {
          messageText: "음.. 만족스럽진 못했던 것 같아.",
          action: "message",
          label: "2"
        },
        {
          messageText: "그냥 평범했던 것 같은데?",
          action: "message",
          label: "3"
        },
        {
          messageText: "만족스러운 편이었어!",
          action: "message",
          label: "4"
        },
        {
          messageText: "완전 만족스러웠는걸!",
          action: "message",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = sleepRouter;
