///<reference types="cypress"/>
describe('verify the readwrite operations in cypress', function () {
    it('TC01', function () {
        let str1 = ' kartiki '
        let str2 = ' kode '
        //reading in file
        cy.readFile('cypress/e2e/5-ReadWriteFile/files/info.txt').then((data) => {
            cy.log(data)
        })
        //writing in file
        cy.writeFile('cypress/e2e/5-ReadWriteFile/files/info.txt', str1, { flag: 'a+' })

        cy.readFile('cypress/e2e/5-ReadWriteFile/files/info.txt').then((data) => {
            cy.log(data)
        })

        cy.writeFile('cypress/e2e/5-ReadWriteFile/files/info.txt', str2, { flag: 'a+' })
        cy.readFile('cypress/e2e/5-ReadWriteFile/files/info.txt').then((data) => {
            cy.log(data)
        })
    })

    it.only('Read Write flipcart', function () {
        cy.visit('https://www.flipkart.com/search?q=iphone&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_5_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_5_1_na_na_ps&as-pos=5&as-type=RECENT&suggestionId=iphone&requestId=cfb16586-8859-4484-8541-dd7b15a040fb&as-searchtext=iphone')
        cy.writeFile('cypress/e2e/5-ReadWriteFile/files/Book1.csv', `nameM,price \n`)
        cy.get('[class="yKfJKb row"]').each((el) => {

            let nameM = el.find('[class="KzDlHZ"]').text()
            let price = el.find('[class="Nx9bqj _4b5DiR"]').text().replace('₹', "").replace(',', "")
            if (price < 70000) {
                cy.writeFile('cypress/e2e/5-ReadWriteFile/files/Book1.csv', `"${nameM}","${price}"\n`, { flag: 'a+' })
            }
            //cy.log(price)
        })
    })
})