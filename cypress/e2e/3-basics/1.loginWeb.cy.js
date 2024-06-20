
///<reference types="cypress" />

describe('verify contact us page', function () {
    it('verify contact us page for valid data', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartiki19@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify contact us page for invalid email', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartiki')
        cy.get('[name="message"]').type('hey')
        cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')
    })
})
