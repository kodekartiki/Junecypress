///<reference types="cypress" />
describe('verify dom element using various functions', function () {

    it('get the dom element within element using .children()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="zlQd20 "]').children()
    })

    it('get the dom element within element using .first()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').eq(0).first().should('have.length', 1)
    })

    it('get the dom element using .last()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').eq(8).last().should('have.length', 1)
    })

    it('to get dom element  using .eq(index)', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').children().eq(1).should('have.text', 'Mobiles')
    })
    it('to get dom element  using .next()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').children().eq(2).should('have.text', 'Fashion')
    })

    it('to get dom element  using .prev()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').children().eq(0).should('have.text', 'Grocery')
    })

    it('to get dom element  element using .prevAll()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').prevAll()
    })

    it('to get dom element  element using .nextAll()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3ETuFY"]').nextAll()
    })

    it('to get DOM element within element using .siblings()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1XjE3T"]').siblings()
    })

    it('to get DOM element within element using .parents()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3sdu8W emupdz"]').parents()
    })

    it('to get DOM element within element using .parentsUntil()', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="yAlKeh"]').parentsUntil()
        cy.get('[class="_3sdu8W emupdz"]').parentsUntil()
    })
})

