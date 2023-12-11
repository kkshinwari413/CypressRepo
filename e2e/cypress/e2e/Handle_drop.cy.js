/// <reference types="cypress" />
describe("Handle drop_down",()=>{
    it("pick a color value", ()=>{
        cy.visit("http://localhost:4200/pages/dashboard")
        cy.get("nav nb-select").click()
        cy.get(".nb-option").contains("Dark").click()
        cy.get("nb-layout-header nav").should("have.css","background-color","rgb(34,43,69)")
    })
})