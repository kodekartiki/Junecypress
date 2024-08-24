///<reference types="cypress"/>
import userD1 from "../../fixtures/reqres1.json"
import userD2 from "../../fixtures/reqres1.1.json"
describe('verify the api', function () {
    it('TC01 GET request', function () {
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then((res1) => {
            cy.log(res1)
            cy.log(res1.body.data[0].first_name)
            expect(res1.body.data[0].first_name).to.eq('Michael')
            expect(res1.status).to.eq(200)
            expect(res1.statusText).to.eq("OK")
        })
    })

    it('TC02 POST request', function () {
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: userD1
            //  {
            //     "name": "kartiki",
            //     "job": "leader"
            // }
        }).then((res2) => {
            cy.log(res2)
            expect(res2.body.name).to.eq('Avk')
            expect(res2.status).to.eq(201)
            expect(res2.statusText).to.eq("Created")
        })
    })

    userD2.forEach((el) => {
        it('TC02 POST request', function () {
            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
                //  {
                //     "name": "kartiki",
                //     "job": "leader"
                // }
            }).then((res3) => {
                cy.log(res3)
                expect(res3.body.name).to.eq(el.name)
                expect(res3.status).to.eq(201)
                expect(res3.statusText).to.eq("Created")
            })
        })
    })

    it('TC03 PUT (update) request', function () {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: {
                "name": "kartiki",
                "job": "zion resident"
            }
        }).then((res4) => {
            cy.log(res4)
            expect(res4.body.name).to.eq('kartiki')
            expect(res4.status).to.eq(200)
        })
    })
    
    it('TC04 DELETE (delete) request', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
        }).then((res5) => {
            cy.log(res5)
            expect(res5.body).to.eq("")
            expect(res5.status).to.eq(204)
            expect(res5.statusText).to.eq('No Content')
        })
    })

})