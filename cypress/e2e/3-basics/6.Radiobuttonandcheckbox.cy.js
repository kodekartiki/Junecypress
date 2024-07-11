///<reference types="cypress"/>

//RADIOBUTTON

describe('verify the radiobutton using webdriver university', function () {
    it('verify radiobuttons - webdriveruniversity', function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })

    it('verify the radiobuttons using letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').check().should('be.checked')
        cy.get('#benzradio').should('not.be.checked')
        cy.get('#hondaradio').check().should('be.checked')
    })

    //CHECKBOX
    it('verify the checkbox using webdriveruniversity', function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-1"]').click().should('be.checked')
        cy.get('[value="option-2"]').uncheck().should('not.be.checked')
        cy.get('[value="option-4"]').check().should('be.checked')
    })

    it('verify the checkbox using letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#benzcheck').check().should('be.checked')
        cy.get('#bmwcheck').uncheck().should('not.be.checked')
        cy.get('#hondacheck').click().should('be.checked')

    })

    it('verify the radio button using amazonin', function () {
        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-line-2"]').first().click()
       
        cy.get('[value="hi_IN"]').click({ force: true })
        cy.get('[value="hi_IN"]').check().should('be.checked')
        
        cy.get('[value="mr_IN"]').click({ force: true })
        cy.get('[value="mr_IN"]').check().should('be.checked')

        cy.get('[value="hi_IN"]').should('not.be.checked')

        cy.get('[value="te_IN"]').click({ force: true })
        cy.get('[value="te_IN"]').check().should('be.checked')

    })

})