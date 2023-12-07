describe("Checking invoke command",()=>{
    it("Simple test",()=>{
        cy.visit('http://localhost:4200/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get("[for='exampleInputEmail1']").should('contain','Email address')
        cy.get("[for='exampleInputEmail1']").then(label =>{
            expect(label.text()).to.be.equal("Email address")
        })
        cy.get("[for='exampleInputEmail1']").invoke('text').then(text =>{
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card','Basic form')
                    .find('nb-checkbox')
                    .click()
                    .find('.custom-checkbox')
                    .invoke('attr','class')
                    .should('contain','checked')
    })
    it.only("assert property", ()=>{
        cy.visit('http://localhost:4200/pages')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()  
        cy.get("[icon='menu-2-outline']").click()
        cy.contains('nb-card','Common Datepicker')
            .find('input').then(input =>{
                cy.wrap(input).click()
                cy.get('nb-calendar-day-picker').contains('17').click()
                cy.wrap(input).invoke('prop','value').should('contain','Dec 17, 2023')
            })
    })
})