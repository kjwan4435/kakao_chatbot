const apiRouter = require("express").Router();

const sleepBlock = "5f2ab465a61f23000117c5a8";
const activityBlock = "5f2d04eea231f900011b2f9a";
const foodBlock = "5f2d06d25d623f00015bd6a6";
const moodBlock = "5f2d05a5f046510001e0fb57";
const socialBlock = "5f2d0753b05d5f0001034d6d";

apiRouter.post("/0", function (req, res) {
  const number = Math.floor(Math.random() * 3) + 1;
  let sentence =
    "안녕하세요! 주인님 :)\n오늘 왠지 좋은 일이 생길 것만 같은걸요?";
  if (number === 1) {
    sentence = "안녕하세요! 주인님 :)\n너무너무 기분좋은 하루입니다!! 헤헤";
  } else if (number === 2) {
    sentence = "안녕하세요 주인님?\n오늘 하루도 아자아자!! ❤️";
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
              "Q. 주인님은 오늘 기분이 어떠신가요?\n\n1. 우울해\n2. 평범해\n3. 좋아!"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "잠",
          action: "block",
          blockId: `${sleepBlock}`,
          label: "잠"
        },
        {
          messageText: "활동",
          action: "block",
          blockId: `${activityBlock}`,
          label: "활동"
        },
        {
          messageText: "기분",
          action: "block",
          blockId: `${moodBlock}`,
          label: "기분"
        },
        {
          messageText: "식사",
          action: "block",
          blockId: `${foodBlock}`,
          label: "식사"
        },
        {
          messageText: "사회활동",
          action: "block",
          blockId: `${socialBlock}`,
          label: "사회활동"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post("/1", function (req, res) {
  const number = Math.floor(Math.random() * 3) + 1;
  let sentence =
    "안녕하세요! 주인님 :)\n오늘 왠지 좋은 일이 생길 것만 같은걸요?";
  if (number === 1) {
    sentence = "안녕하세요! 주인님 :)\n너무너무 기분좋은 하루입니다!! 헤헤";
  } else if (number === 2) {
    sentence = "안녕하세요 주인님?\n오늘 하루도 아자아자!! ❤️";
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
              "Q. 주인님은 오늘 기분이 어떠신가요?\n\n1. 우울해\n2. 평범해\n3. 좋아!"
          }
        }
      ],
      quickReplies: [
        {
          messageText: "잠",
          action: "block",
          blockId: `${sleepBlock}`,
          label: "잠"
        },
        {
          messageText: "활동",
          action: "block",
          blockId: `${activityBlock}`,
          label: "활동"
        },
        {
          messageText: "기분",
          action: "block",
          blockId: `${moodBlock}`,
          label: "기분"
        },
        {
          messageText: "식사",
          action: "block",
          blockId: `${foodBlock}`,
          label: "식사"
        },
        {
          messageText: "사회활동",
          action: "block",
          blockId: `${socialBlock}`,
          label: "사회활동"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post("/showHello", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl:
              "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = apiRouter;
