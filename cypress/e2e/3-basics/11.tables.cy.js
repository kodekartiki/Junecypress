///<reference types="cypress"/>
describe('verify tables in cypress', function () {
    function calculateAge(css, Esum) {
        let sum = 0
        cy.get(css).find('tr').each((row) => {
            //cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(Esum)
        })
    }

    it('tables- webdriver university1', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each((row) => {
            //cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(159)
        })
    })
    it('tables- webdriver university2', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each((row) => {
            //cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(163)
        })
    })

    it('table1', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

        calculateAge('#t01', 159)
    })
    it('table2', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

        calculateAge('#t02', 163)
    })

    it('table -let kodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')
        let sum = 0
        cy.get(' tbody > tr').find('td.price').each((el) => {
            //cy.get('td.price').each((el) => {
            sum += Number(el.text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(90)
        })
    })
})