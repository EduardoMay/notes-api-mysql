import morgan from "morgan";

export default morgan(function (tokens, req, res) {
  const { log } = console;

  log(">>>>>>>>>>>>>>>LOGREQUEST>>>>>>>>>>>>>>>>>>>>>");
  log(tokens.status(req, res));
  log(tokens.method(req, res), tokens.url(req, res));
  //log('params',req.params)
  //Always be empty, because the endpoint define its params and this is executed before
  log("query:", req.query);
  log("body:", req.body);
  log("res", tokens.res(req, res, "content-length"));
  log(tokens["response-time"](req, res), "ms");
  log("<<<<<<<<<<<<<<<LOGREQUEST<<<<<<<<<<<<<<<<<<<<<");
});
