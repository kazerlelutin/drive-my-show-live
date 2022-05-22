const 
  Router = require("@koa/router"),
  router = new Router(),
  broadcast = require("./broadcast/broadcast"),
  home = require("./home/home"),
  refreshConductor = require("./refreshConductor/refreshConductor");

router.get("/", home);
router.post("/broadcast", broadcast);
router.post("/refreshConductor", refreshConductor);

module.exports = router;
