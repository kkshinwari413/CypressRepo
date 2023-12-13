/// <reference types="cypress-xpath" />
/// <reference types="cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4200/pages");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.get("tbody")
      .contains("tr", "Sevan")
      .then((tableRow) => {
        cy.get("[icon='menu-2-outline']").click();
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(25);
        cy.wrap(tableRow).find(".nb-checkmark").click();
        cy.wrap(tableRow).find("td").eq(6).should("contain", "25");
      });

    cy.get("thead").find(".nb-plus").click();
    cy.get("thead")
      .find("tr")
      .eq(2)
      .then((tableRow) => {
        cy.wrap(tableRow).find('[placeholder="First Name"]').type("Artam");
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Bondar");
        cy.wrap(tableRow).find(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tableColumn) => {
        cy.wrap(tableColumn).eq(2).should("contain", "Artam");
        cy.wrap(tableColumn).eq(3).should("contain", "Bondar");
      });
  });
});
