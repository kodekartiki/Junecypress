///<reference types="cypress"/>
describe('verify the excel file payload in cypress', function () {

    it('TC01 Exceldata payload', function () {
        cy.parseXlsx('E:/dipanshu mam cypress/cypress/fixtures/execlData.xlsx').then((jsonData) => {
            cy.log(jsonData[0].data)
            cy.log(jsonData[0].data[1][0])

            for (let i = 1; i < jsonData[0].data.length; i++) {
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')


                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
                cy.get('[name="email"]').type(jsonData[0].data[i][2])
                cy.get('[name="message"]').type(jsonData[0].data[i][3])

                cy.get('[type="submit"]').click()

                cy.get('h1').should('have.text', 'Thank You for your Message!')
            }
        })
    })
})

