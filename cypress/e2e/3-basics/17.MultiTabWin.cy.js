///<reference types="cypress"/>
describe('verify the multitab in cypress', function () {
    it('MULTITAB using href attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').should('have.attr', 'href').and('include', '/courses')
    })

    it('MULTITAB by removing target attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/courses')
    })

    it('MULTITAB by without removing target attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', '/courses')
        })
    })

    //rahul shetty
    it('MULTITAB by removing target attribute', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').first().invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'qaclickacademy')
    })

    it('MULTITAB by without removing target attribute', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').first().then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'qaclickacademy')
        })
    })

    //MULTIWINDOW

    it('verify the multiwindow', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain', '/courses')
    })

    it('verify the multiwindow', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })
        cy.get('[id="openwindow"]').click()
        cy.url().should('contain', 'qaclickacademy')
    })

})