import mYuRL from "../fixtures/example.json";

describe("template spec", () => {
  it("passes", () => {
    cy.visit(mYuRL.Stapperurl);
  });
});
