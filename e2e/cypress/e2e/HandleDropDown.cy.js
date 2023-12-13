/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const { ConstantPool } = require("@angular/compiler");

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4200/pages/dashboard");
    cy.get("nav nb-select").click();
    cy.get(".option-list")
      .contains("Dark")
      .click()
      .then(($elements) => {
        const text = $elements.text();
        if (text === "Dark") {
          cy.get();
        }
      });
  });
});
