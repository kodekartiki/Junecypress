///<reference types="cypress"/>
describe('verify iframe in cypress', function () {
    it('verify iframe using jquery', function () {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="products.html"]').should('have.text', 'Our Products')
        cy.get('#frame').then(function ($frame) {
            let iframeBody = $frame.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href="products.html"]').should('have.text', 'Our Products')
        })
    })

    it('verify iframe using javascript', function () {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="products.html"]').should('have.text', 'Our Products')
        cy.get('#frame').then(function (frame) {
            //cy.log(frame[0].contentDocument.body)
            let iframeBody = frame[0].contentDocument.body
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href="products.html"]').should('have.text', 'Our Products')
        })
    })
    it('verify iframe using fuction', function () {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        let iframeBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iframeBody.find('a[href="products.html"]').should('have.text', 'Our Products')
    })

    it('verify iframe using fuction', function () {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.getiframeBody('#frame').find('a[href="products.html"]').should('have.text', 'Our Products')
    })

    it.only('verify iframe letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.getiFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text', 'All Courses')
    })
})

