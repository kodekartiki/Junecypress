///<reference types="cypress"/>

describe('verify file upload', function () {

    it('single file upload', function () {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path1 = "C:/Users/KALYANI/Downloads/KKartikicv.pdf"
        cy.get('input[id="myFile"]').selectFile(path1)

        cy.on('window:alert', function (text) {
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })

        cy.get('#submit-button').click()
        cy.url().should('contain', 'KKartikicv.pdf')
    })

    it('single file upoad', function () {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path2 = 'cypress/e2e/4-fileupload/24_OrangeHRM_FRS-Sample_lyst4496.docx'
        cy.get('input[id="myFile"]').selectFile(path2)

        cy.on('window:alert', function (text) {
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })

        cy.get('#submit-button').click()
        cy.url().should('contain', '24_OrangeHRM_FRS-Sample_lyst4496.docx')

    })

    it('multiple file upload',function(){
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path1='C:/Users/KALYANI/Downloads/KKartikicv.pdf'
        let path2='cypress/e2e/4-fileupload/24_OrangeHRM_FRS-Sample_lyst4496.docx'
        let path3='cypress/e2e/4-fileupload/av.dox (3) (1).pdf'

        cy.get('[type="file"]').first().selectFile([ path1,path2,path3])

        cy.get('[id="ember355"]').should('contain','3')
        })
    })
