const sleepRouter = require("express").Router();

let sleep = require("../models/sleep.model");

sleepRouter.route("/1").post((req, res) => {
  console.log(req);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = sleepRouter;
