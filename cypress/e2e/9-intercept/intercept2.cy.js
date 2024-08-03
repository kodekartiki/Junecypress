///<reference types="cypress"/>
import interData from "../../fixtures/intercept.json"
describe('verify the intercept concept in cypress', function () {
    it('TC01 intercept GetComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }, {
            body: interData
            //{
            //     "postId": 1,
            //     "id": 1,
            //     "name": "kartiki",
            //     "email": "kartiki@gmail.com",
            //     "body": "i am learning cypress"
            // }
        }).as('getComment')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res) => {
            cy.log(res)
            expect(res.response.body.name).to.eq(interData.name)
        })
        cy.get('[class="network-comment"]').should('contain', interData.body)
    })

    it('TC02 intercept postcomment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'POST'
        }, {
            body: {
                "name": "av",
                "email": "av@gmail.com",
                "body": "playwright",
                "id": 501
            }
        }).as('PostComment')
        cy.contains('Post Comment').click()
        cy.wait('@PostComment').then((res2) => {
            cy.log(res2)
            expect(res2.response.statusCode).to.eq(200)
        })
        cy.get('[class="network-post-comment"]').should('have.text', 'POST successful!')
    })

    it('TC03 intercept UpdateComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'PUT'
        }).as('updateComment')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res) => {
            cy.log(res)
            expect(res.response.body.name).to.eq("Using PUT in cy.intercept()")
        })
    })
})
