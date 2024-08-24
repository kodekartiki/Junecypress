///<reference types="cypress" />
import postpayload from "../../fixtures/gorestFixpayload/PostGo"
import putpayload from "../../fixtures/gorestFixpayload/PutGo"


describe('verify API testing in cypress-gorest with fixture', function () {
    const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'

    postpayload.forEach((el, index) => {
        it('gorest e2e -POST/PUT/DELETE request with fixture', () => {
            cy.request({
                method: 'POST',
                url: '/public/v2/users',
                body: el,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resA) => {
                expect(resA.status).to.eq(201)
                expect(resA.body.name).to.eq(el.name)
                return resA.body.id
            }).then((id) => {
                cy.request({
                    method: 'PUT',
                    url: `/public/v2/users/${id}`,
                    body: putpayload[index],
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((resB) => {
                    expect(resB.status).to.eq(200)
                    expect(resB.body.name).to.eq(putpayload[index].name)
                }).then(() => {
                    cy.request({
                        method: 'DELETE',
                        url: `/public/v2/users/${id}`,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((resC) => {
                        expect(resC.status).to.eq(204)
                        expect(resC.body).to.eq("")
                    })
                })
            })
        })
    })
})