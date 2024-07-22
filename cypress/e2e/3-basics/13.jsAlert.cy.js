///<reference types="cypress"/>

describe('verify the js alert', function () {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    //window-Alert()
    it('window-Alert()', function () {
        cy.on('window:alert', function (text) {
            expect(text).to.eq('I am a JS Alert')
            return true
        })

        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //window-confirm()
    it('window-confirm()', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return true
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('window-confirm()', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return false
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //window-prompt()
    it('window-prompt()', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('I am learning CYPRESS')
            return true
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: I am learning CYPRESS')
    })

    it('window-prompt()', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('null')
            //return null
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: null')
    })
})