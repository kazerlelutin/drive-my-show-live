

module.exports = function broadcast(ctx) {
  const { token, media } = ctx.request.body;
  console.log(media)
  ctx.io.emit(`slider-${token}`, media);
  ctx.body = "done";
};
