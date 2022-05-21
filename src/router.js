const 
  home = require("./home/broadcast"),
  broadcast = require("./home/broadcast"),
  Router = require("@koa/router"),

  router = new Router();

router.get("/", home);
router.post('/broadcast',broadcast)

module.exports = router;
