///<reference types='cypress' />

import user1 from "../../fixtures/contact1.json"
import user2 from "../../fixtures/contact2.json"
import user3 from "../../fixtures/contact3.json"
import user4 from "../../fixtures/contact4"


describe('verify payload by fixture in cypress', function () {


    it('TC01 verify contact us form', function () {
        //cy.log(user1)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(user1.fn)
        cy.get('[name="last_name"]').type(user1.ln)
        cy.get('[name="email"]').type(user1.em)
        cy.get('[name="message"]').type(user1.msg)
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it('TC02 verify contact us form', function () {
        //cy.log(user2)
        for (let keys in user2) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user2[keys].fn)
            cy.get('[name="last_name"]').type(user2[keys].ln)
            cy.get('[name="email"]').type(user2[keys].em)
            cy.get('[name="message"]').type(user2[keys].msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')

        }
    })
    it('TC03 verify contact us form', function () {
        //cy.log(user2)
        user3.forEach(function (el) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.em)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });

    })

    user3.forEach(function (el, index) {
        it(` TC04 verify contact us form for user ${index + 1}`, function () {
            //cy.log(user2)

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.em)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });

    })

    user4.forEach(function (el, index) {
        it.only(` TC05 verify contact us form for user ${index + 1}`, function () {
            //cy.log(user2)

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.em)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });

    })


})