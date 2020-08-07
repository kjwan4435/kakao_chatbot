const activityRouter = require("express").Router();

let result = require("../models/answer.model");

activityRouter.route("/0").post((req, res) => {
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
              "주인님! 오늘 기분은 어떠신가요?\n\n1. 최악이야.\n2. 별로 좋지않아.\n3. 보통이야.\n4. 좋은 편이야.\n5. 완전 기분 좋아!"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "오늘 기분 너무 안 좋아..",
          action: "block",
          blockId: "5f2d05156637c80001b91cd5",
          label: "1"
        },
        {
          messageText: "오늘 기분 별로 안 좋아",
          action: "block",
          blockId: "5f2d05156637c80001b91cd5",
          label: "2"
        },
        {
          messageText: "오늘 기분 평범한걸?",
          action: "block",
          blockId: "5f2d05156637c80001b91cd5",
          label: "3"
        },
        {
          messageText: "오늘 기분 좋은 편이야!",
          action: "block",
          blockId: "5f2d05156637c80001b91cd5",
          label: "4"
        },
        {
          messageText: "오늘 기분 완전 좋아!",
          action: "block",
          blockId: "5f2d05156637c80001b91cd5",
          label: "5"
        }
      ]
    }
  };

  console.log(responseBody);
  res.status(200).send(responseBody);
});

activityRouter.route("/1").post((req, res) => {
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

  if (answer === "오늘 기분 너무 안 좋아..") {
    sentence =
      "이럴수가.. 무슨 일이세요?! 혹시 잠자리가 불편하셨던 건 아니에요??";
  } else if (answer === "오늘 기분 별로 안 좋아") {
    sentence =
      "주인님 기분이 별로라니.. 제가 다 속상하네요! 혹시 잠자리가 불편하셨던 건 아닐까요?";
  } else if (answer === "오늘 기분 평범한걸?") {
    sentence =
      "그러셨군요! 오늘은 주인임의 최근 잠자리에 대해서 여쭤볼려고 해요!";
  } else if (answer === "오늘 기분 좋은 편이야!") {
    sentence =
      "이야! 기분이 좋으시다니 정말 다행인데요? 잠은 요즘 잘 주무시구요?";
  } else if (answer === "오늘 기분 완전 좋아!") {
    sentence =
      "야호!! 주인님 기분이 좋으시다니 날아갈 것만 같아요!\n주인님! 요즘 잠자리가 좋으신건가~?";
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
              "주인님의 최근 일주일동안의 주인님의 수면 만족도는 어느정도인가요?\n\n1. 매우 불만족\n2. 다소 불만족\n3. 보통\n4. 다소 만족\n5. 매우 만족"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "완전 불만족스러워..",
          action: "block",
          blockId: "5f2d052a5d623f00015bd69e",
          label: "1"
        },
        {
          messageText: "음.. 만족스럽진 못했던 것 같아.",
          action: "block",
          blockId: "5f2d052a5d623f00015bd69e",
          label: "2"
        },
        {
          messageText: "그냥 평범했던 것 같은데?",
          action: "block",
          blockId: "5f2d052a5d623f00015bd69e",
          label: "3"
        },
        {
          messageText: "만족스러운 편이었어!",
          action: "block",
          blockId: "5f2d052a5d623f00015bd69e",
          label: "4"
        },
        {
          messageText: "완전 만족스러웠는걸!",
          action: "block",
          blockId: "5f2d052a5d623f00015bd69e",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

activityRouter.route("/2").post((req, res) => {
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

  let sentence = "그러셨군요..";

  if (answer === "완전 불만족스러워..") {
    sentence =
      "이럴수가..!! 잠은 행복에 정말 중요한 요소인걸요..! 안되겠어요, 원인을 한 번 찾아보죠!";
  } else if (answer === "음.. 만족스럽진 못했던 것 같아.") {
    sentence = "앗.. 그러셨군요 ㅠㅠ 주인님이 왜 잠이 불편했을까요.. 흠..";
  } else if (answer === "그냥 평범했던 것 같은데?") {
    sentence =
      "그러셨군요, 주인님! 잠은 행복에 매우 중요한 요소인 것 아시나요?!";
  } else if (answer === "만족스러운 편이었어!") {
    sentence = "이야 다행이네요 정말!!";
  } else if (answer === "완전 만족스러웠는걸!") {
    sentence =
      "야호!! 주인님이 잠자리가 완전 만족스러우셨다니 해피는 너무 행복하다구요!";
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
              "그러면 주인님! 최근에 잠은 대체로 몇시에 드시나요?\n\n1. 밤 9시 이전\n2. 밤 9시 - 밤 11시\n3. 밤 11시 - 새벽 1시\n4. 새벽 1시 - 새벽 3시\n5. 새벽 3시 이후"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "밤 9시 전에 잤던 것 같은데??",
          action: "block",
          blockId: "5f2d058c7b299f0001dd8217",
          label: "1"
        },
        {
          messageText: "음.. 9시에서 11시 사이 정도에 자는 편이야!",
          action: "block",
          blockId: "5f2d058c7b299f0001dd8217",
          label: "2"
        },
        {
          messageText: "밤 11시에서 새벽 1시 사이 정도에 잤어",
          action: "block",
          blockId: "5f2d058c7b299f0001dd8217",
          label: "3"
        },
        {
          messageText: "요즘 새벽 1시에서 3시 사이에 자는 편이야",
          action: "block",
          blockId: "5f2d058c7b299f0001dd8217",
          label: "4"
        },
        {
          messageText: "요즘 주로 새벽 3시 넘어서 자는 편이야..",
          action: "block",
          blockId: "5f2d058c7b299f0001dd8217",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

activityRouter.route("/3").post((req, res) => {
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

  let sentence = "그러셨군요..";

  if (answer === "밤 9시 전에 잤던 것 같은데??") {
    sentence = "주인님은 일찍 주무시는 편이시군요!";
  } else if (answer === "음.. 9시에서 11시 사이 정도에 자는 편이야!") {
    sentence = "그러셨구나!";
  } else if (answer === "밤 11시에서 새벽 1시 사이 정도에 잤어") {
    sentence = "그러셨군요..";
  } else if (answer === "요즘 새벽 1시에서 3시 사이에 자는 편이야") {
    sentence = "주인님은 꽤 늦게 주무시는군요!";
  } else if (answer === "요즘 주로 새벽 3시 넘어서 자는 편이야..") {
    sentence = "앗.. 주인님 너무 늦게 주무시는거 아니에요?? 몸 상하세요 ㅠㅠ";
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
              "주인님! 그러면 최근 일주일동안 하루 평균 잠은 얼마나 주무셨나요?\n\n1. 4시간 이하\n2. 4-6시간\n3. 6-8시간\n4. 8-10시간\n5. 10시간 이하"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "4시간도 못 잤어",
          action: "block",
          blockId: "5f2d0553a231f900011b2f9f",
          label: "1"
        },
        {
          messageText: "4-6시간 정도 잔 것 같아.",
          action: "block",
          blockId: "5f2d0553a231f900011b2f9f",
          label: "2"
        },
        {
          messageText: "6-8시간 정도 잤어!",
          action: "block",
          blockId: "5f2d0553a231f900011b2f9f",
          label: "3"
        },
        {
          messageText: "음.. 8-10시간 정도?",
          action: "block",
          blockId: "5f2d0553a231f900011b2f9f",
          label: "4"
        },
        {
          messageText: "10시간도 넘게 잤어!",
          action: "block",
          blockId: "5f2d0553a231f900011b2f9f",
          label: "5"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

activityRouter.route("/4").post((req, res) => {
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

  let sentence = "그러셨군요..";

  if (answer === "4시간도 못 잤어") {
    sentence =
      "앗, 주인님 요즘 잠을 잘 못 주무신건가요..?? 충분한 숙면은 건강 및 행복에도 정말 중요하다구요!";
  } else if (answer === "4-6시간 정도 잔 것 같아.") {
    sentence =
      "그러셨구나! 혹시 잠이 부족하진 않으세요? 충분한 숙면은 건강 및 행복에도 정말 중요하답니다!";
  } else if (answer === "6-8시간 정도 잤어!") {
    sentence = "그러셨군요!";
  } else if (answer === "음.. 8-10시간 정도?") {
    sentence = "그러셨구나!";
  } else if (answer === "10시간도 넘게 잤어!") {
    sentence =
      "헉!! 충분한 숙면이 물론 건강이나 행복에 중요하기도 하지만 너무 과도한 잠은 오히려 악영향이 있을지도 몰라요!";
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
              "최근 연구에 따르면 우울 정도에 가장 큰 영향을 미치는 게 바로 숙면이라고 해요! 혹시 우울하거나 기분전환이 필요할 때 그 날 잠을 푹 자고 다음 날을 힘차게 시작하는 것이 최고라구요!"
          }
        },
        {
          simpleText: {
            text: "해피는 항상 주인님의 편안한 밤 보내시길 바란답니다 :)"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "해피야, 고마워 :)",
          action: "block",
          blockId: "5f2d05676637c80001b91cd7",
          label: "해피야, 고마워 :)"
        },
        {
          messageText: "해피야, 숙면을 위한 좋은 방법은 없을까?",
          action: "block",
          blockId: "5f2d05676637c80001b91cd7",
          label: "숙면방법 좀 알려줘!"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

activityRouter.route("/5").post((req, res) => {
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

  let sentence = "해피야, 고마워 :)";

  if (answer === "해피야, 고마워 :)") {
    sentence =
      "헤헤, 주인님이 이렇게 정성껏 대답해주셔서 오히려 제가 얼마나 행복한 지 몰라요~!!";
  } else if (answer === "해피야, 숙면을 위한 좋은 방법은 없을까?") {
    sentence =
      "그건 제가 전문가죠! 먼저 하루동안 간단한 운동을 통해 숙면을 유도해보는 건 어떨까요? 잠들기 전, 따뜻한 물로 샤워를 한다던지 따뜻한 차를 마시는 것도 좋은 방법이에요.\n\n단, 취침 직전 야식이나 술은 안 좋으니 가급적 피하시구요! 취침 직전 휴대폰 너무 보시는 것도 좋지 않아요!";
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
              "그럼 오늘 질문은 여기까지구요! 저는 내일 다시 찾아뵐게요:)\n\n남은 하루 행복하시구요! 사랑합니다 주인님 ❤️"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "그래, 내일 보자 :)",
          action: "message",
          label: "그래, 내일 보자 :)"
        },
        {
          messageText: "안돼, 가지마!",
          action: "message",
          label: "안돼, 가지마!"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = activityRouter;
