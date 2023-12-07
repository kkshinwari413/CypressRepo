/// <reference types="cypress" />
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/pages')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
      cy.contains('[status="primary"]',"Sign in")
    })
  })