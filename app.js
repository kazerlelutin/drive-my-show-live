require("dotenv").config();

const 
  Koa = require("koa"),
  router = require("./src/router"),
  app = new Koa(),
  koaBody = require("koa-body"),
  cors = require("@koa/cors"),
  http = require("http"),
  httpServer = http.createServer(app.callback()),
  ioSettings =  {
    cors: {
      origin: process.env.CORS_DOMAIN,
      methods: ["GET", "POST"],
    },
  }
  io = require("socket.io")(httpServer,ioSettings);
  
app
  .use(koaBody())
  .use(cors())
  .use((ctx, next) => {
    if (!ctx.io) ctx.io = io;
    next();
  })
  .use(router.routes())
  .use(router.allowedMethods());

//TODO cron taskes launch

httpServer.listen(5000);
