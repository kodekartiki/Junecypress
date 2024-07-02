///<reference types="cypress" />
describe('verify contact us page', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify contact us page for valid data', function () {
        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartikik@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('verify contact us page for invalid email id', function () {

        cy.get('[name="first_name"]').type('kalyani')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kalyani')
        cy.get('[name="message"]').type('HEY')
        cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')

    })

    it('verify contact is page for incomplet data', function () {

        cy.get('[name="first_name"]').type('kalyani')
        cy.get('[name="email"]').type('kartiki@gmail.com')
        cy.get('[name="message"]').type('HI')
        cy.get('[type="submit"]').click()

        cy.contains('Error: all fields are required').should('be.visible')
    })

    it('verify contact us page for reset button', function () {

        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartikik@gmail.com')
        cy.get('[name="message"]').type('i am learning js')
        cy.get('[type="reset"]').click()


        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")
    })
})