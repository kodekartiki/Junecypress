///<reference types="cypress"/>

describe('verify the contactUs form', function () {
    it('TC01 contact us form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartiki@gmail.com')
        cy.get('[name="message"]').type('I am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})


