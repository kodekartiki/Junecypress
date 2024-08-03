///<reference types="cypress"/>

describe('verify payload by fixture in cypress', function () {
    let info = {
        fn: "kartiki",
        ln: "kode",
        em: "kartiki@gmail.com",
        msg: "cypress"
    }

    it('TC01 verify contactUs form', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('kartiki')
        cy.get('[name="last_name"]').type('kode')
        cy.get('[name="email"]').type('kartiki@gmail.com')
        cy.get('[name="message"]').type('cypress')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('TC02 verify contactUs form', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(info.fn)
        cy.get('[name="last_name"]').type(info.ln)
        cy.get('[name="email"]').type(info.em)
        cy.get('[name="message"]').type(info.msg)
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    //cy.fixture
    it('TC03 verify contact us form', function () {
        cy.fixture("contact1").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.fn)
            cy.get('[name="last_name"]').type(user.ln)
            cy.get('[name="email"]').type(user.em)
            cy.get('[name="message"]').type(user.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it('TC04 verify contact us form', function () {
        cy.fixture("contact2").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userOne.fn)
            cy.get('[name="last_name"]').type(user.userOne.ln)
            cy.get('[name="email"]').type(user.userOne.em)
            cy.get('[name="message"]').type(user.userOne.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it('TC05 verify contact us form', function () {
        cy.fixture("contact2").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userTwo.fn)
            cy.get('[name="last_name"]').type(user.userTwo.ln)
            cy.get('[name="email"]').type(user.userTwo.em)
            cy.get('[name="message"]').type(user.userTwo.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })



})