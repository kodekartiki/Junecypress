///<reference types="cypress"/>

describe('verify the shadowDOM element in cypress', function () {
    it('TC01', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('shadow-signup-form').shadow().find('[name="username"]').type('kartiki')
        cy.get('shadow-signup-form').shadow().find('[name="email"]').type('kodekartiki01@gmail.com')
        cy.get('shadow-signup-form').shadow().find('[name="password"]').type('Kartiki@001')
        cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('Kartiki@001')
        cy.get('shadow-signup-form').shadow().find('[type="button"]').click()
    })

    it('TC02', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('[name="username"]', { includeShadowDom: true }).type('kartiki')
        cy.get('[name="email"]', { includeShadowDom: true }).first().type('kodekartiki01@gmail.com')
        cy.get('[name="password"]', { includeShadowDom: true }).type('Kartiki@001')
        cy.get('[name="confirm_password"]', { includeShadowDom: true }).type('Kartiki@001')
        cy.get('[type="button"]', { includeShadowDom: true }).click()

    })
})