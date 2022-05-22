module.exports = function refreshConductor(ctx) {
    const show = ctx.request.body;
  Object.keys(show).forEach((key) => {
    ctx.io.emit(`conductor-${key}-${show[key]}`, true);
  });
  ctx.body = "done";
};
