describe("Login scenario",()=>{
    it("Enter valid email and password",()=>{
        cy.visit('http://localhost:4200/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get("[icon='menu-2-outline']").click()
        cy.get('#inputEmail1').type("jhondoe@gmail.com")
        cy.get('#inputPassword2').type('12345676')
        cy.contains('Sign in').click()
        cy.end();
    })
})