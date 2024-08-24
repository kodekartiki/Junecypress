///<reference types="cypress"/>

describe('verify the browser version', function () {
    it('browser version', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.log(`Running in ${Cypress.browser.name}`)

        cy.log(`Browser family ${Cypress.browser.family}`)
        cy.log(`Browser version ${Cypress.browser.version}`)
        cy.log(`Browser major version ${Cypress.browser.majorVersion}`)

        if (Cypress.browser.name === 'electron') {
            cy.log('electron')
        }
    })
})