///<reference types="cypress"/>

describe('verify the gorest api', function () {
    const token = '7650a19cddfd47662549ccfe95785e44defe1df563ffafe3b4a69aa8f6e6e117'
    it('gorest api (GET) request (retrive)', function () {
        cy.request({
            method: 'GET',
            url: '/public/v2/users',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body[0]).to.have.keys('id', 'name', 'email', 'gender', 'status')
        })
    })

    it('gorest e2e -POST/PUT/DELETE request', () => {
        cy.request({
            method: 'POST',
            url: '/public/v2/users',
            body: {
                "name": "kartiki kode",
                "gender": "female",
                "email": `kartiki${Math.floor(Math.random() * 1000)}@15ce.com`,
                "status": "active"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((resP) => {
            //cy.log(resP)
            //cy.log(resP.body.id)
            expect(resP.status).to.eq(201)
            expect(resP.body).to.have.keys('id', 'name', 'email', 'gender', 'status')
            return resP.body.id
        })
            .then((id) => {
                cy.request({
                    method: 'PUT',
                    url: `/public/v2/users/${id}`,
                    body: {
                        "name": "kalyani",
                        "email": `kartiki${Math.floor(Math.random() * 1000)}@15ce.com`,
                        "status": "active"
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((resU) => {
                    //cy.log(resU)
                    expect(resU.status).to.eq(200)
                    expect(resU.body.name).to.eq('kalyani')
                    return
                }).then(() => {
                    cy.request({
                        method: 'DELETE',
                        url: `/public/v2/users/${id}`,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((resD) => {
                        cy.log(resD)
                        expect(resD.body).to.eq('')
                        expect(resD.status).to.eq(204)
                    })
                })
            })

    })
})