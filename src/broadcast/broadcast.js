module.exports = function broadcast(ctx) {
  const { token, media } = ctx.request.body;
  ctx.io.emit(`slider-${token}`, media);
  ctx.body = "done";
};
