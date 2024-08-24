// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getiframeBody', (css) => {
    return cy.get(css).its('0.contentDocument.body').then(cy.wrap)
})

Cypress.Commands.add('parseXlsx', (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
})

Cypress.Commands.add('HRMLoginWithSession', (un, pw) => {
    cy.session([un, pw], () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(un)
        cy.get('[name="password"]').type(pw)
        cy.get('.orangehrm-login-button').click()
    })
})