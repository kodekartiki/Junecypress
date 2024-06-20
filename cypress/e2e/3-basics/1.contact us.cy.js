///<reference types="cypress"/>

describe('verify the contactUs login', function () {
    it('verify the url', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')


        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kodekartiki01@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

})


