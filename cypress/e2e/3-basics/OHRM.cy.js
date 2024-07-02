///<reference types="cypress" />
describe('verify login page for OHRM', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('verify login for valid data', function () {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', "Dashboard")
    })
    it('verify liogin for invalid data', function () {
        cy.get('[name="username"]').type('Admin16')
        cy.get('[name="password"]').type('kk')

        cy.get('[type="submit"]').click()

        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    })
})