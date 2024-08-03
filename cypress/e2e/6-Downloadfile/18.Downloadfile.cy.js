///<reference types="cypress"/>
describe('verify the file download option',function(){
    it('verify the downloadfile option',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('[id="download"]').click()
        cy.readFile('cypress/downloads/sample2.csv',{timeout:60000}).should('contain','Eldon Base')
    })

    it.only('verify the download using verifyDownload()',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('[id="download"]').click()
       // cy.readFile('cypress/downloads/sample2.csv',{timeout:60000}).should('contain','Eldon Base')
        //cy.verifyDownload('sample2.csv')
        cy.verifyDownload('.csv',{ contains: true })
        cy.verifyDownload('sam',{ contains: true })
    })
})