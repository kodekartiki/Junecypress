///<reference types="cypress"/>

before(function () {
    cy.log("i will execute first")
})

beforeEach(function () {
    cy.log("i will execute before each test case")
})

it("TC1", function () {
    cy.log("i am TC1")
})
it("TC2", function () {
    cy.log("i am TC2")
})

afterEach(function () {
    cy.log("i will execute after each TC")
})

after(function () {
    cy.log("i will execute last")
})