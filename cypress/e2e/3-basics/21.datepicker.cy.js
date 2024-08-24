///<reference types="cypress" />

describe('verify date picker functionality', function () {
    it('verify date picker functionality for future date', function () {
        //for current date
        let todayDate = new Date()
        cy.log(`todayDate ${todayDate}`)

        let todayDate2 = todayDate.getDate()
        cy.log(`todayDate ${todayDate2}`)

        let todayMonth = todayDate.getMonth()
        cy.log(`todayMonth ${todayMonth + 1}`)

        let todaymonthS = todayDate.toLocaleString("default", { month: "short" })
        cy.log(`todaymonthS ${todaymonthS}`)

        let todaymonthL = todayDate.toLocaleString("default", { month: 'long' })
        cy.log(`todaymonthL ${todaymonthL}`)

        let todayyear = todayDate.getFullYear()
        cy.log(`todayyear ${todayyear}`)

        //for future date
        let DateF = new Date()
        DateF.setDate(DateF.getDate() + 30)

        cy.log(`DateF ${DateF}`)

        let dateF2 = DateF.getDate()
        cy.log(`dateF2 ${dateF2}`)

        let monthF = DateF.getMonth()
        cy.log(`monthF ${monthF + 1}`)

        let monthFs = DateF.toLocaleString("default", { month: "short" })
        cy.log(`monthFs ${monthFs}`)

        let monthFL = DateF.toLocaleString("default", { month: 'long' })
        cy.log(`monthFL ${monthFL}`)

        let yearF = DateF.getFullYear()
        cy.log(`yearF ${yearF}`)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        function selectYearMonth() {
            cy.get('.datepicker-switch').first().then(function (currentDate) {
                cy.log(currentDate.text())
                if (!currentDate.text().includes(DateF.getFullYear())) {
                    cy.get('.next').first().click()
                    selectYearMonth()
                }
            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (currentDate) {
                    if (!currentDate.text().includes(DateF.toLocaleString("default", { month: 'long' }))) {
                        cy.get('.next').first().click()
                        selectYearMonth()
                    }
                })
            })
        }

        function selectDate() {
            //cy.contains(dateF2).click()
            cy.get('[class="day"]').contains(dateF2).click()
        }

        selectYearMonth()
        selectDate()

    })
})