const apiRouter = require("express").Router();

apiRouter.post("/sayHello", function (req, res) {
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
        }
      ],
      quickReplies: [
        {
          messageText: "안녕, 해피야!",
          action: "block",
          blockId: "5f2ab465a61f23000117c5a8",
          label: "안녕, 해피야!"
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
