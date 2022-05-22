const home = require("./home");

describe("Home", () => {
  it("check response", () => {
    const ctx = { body: null };
    home(ctx);
    expect(ctx.body).toEqual("Bienvenue sur l'API du jeu MORSE.");
  });
});
