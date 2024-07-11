///<reference types="cypress"/>
describe('verify the dropdown list', function () {
    it(' static dropdown    ', function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-2').select('TestNG')
    })

    it('dynamic dropdown 1', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > div').each(function (el) {
            if (el.text() == 'Artichoke') {
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Artichoke')
            }

        })
    })

    it('dynamic dropdown 2', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('ca')
        cy.get('#myInputautocomplete-list > div').each(function ($el) {
            if ($el.text() == 'Cabbage') {
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Cabbage')
            }
        })
    })

    it('dynamic dropdown 3', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('d')
        cy.get('#myInputautocomplete-list > div').each(function (el) {
            cy.wrap(el).invoke('text').then((text) => {
                if (text == 'Donuts') {
                    cy.wrap(el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('contain', 'Donuts')

                }
            })

        })

    })

})
