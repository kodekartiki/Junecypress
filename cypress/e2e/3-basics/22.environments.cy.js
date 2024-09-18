///<reference types="cypress"/>

describe('verify the login', () => {
    it('login page', () => {
        // cy.visit('https://practice.automationtesting.in/my-account/')
        // cy.get('[id="username"]').type('production@gmail.com')
        // cy.get('[id="password"]').type('Kartiki@123')
        // cy.get('[name="login"]').click()
        // let email = 'production@gmail.com'
        // let userData = email.split('@')
        // cy.log(userData[0])
        // cy.get('strong').should('have.text', userData[0])

        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('userid'))
        cy.get('[id="password"]').type(Cypress.env('passw'))
        cy.get('[name="login"]').click()
        let email = Cypress.env('userid')
        let userD = email.split('@')
        cy.get('strong').should('have.text', userD[0])
    })


})



//first way
// npx cypress run --spec "cypress\e2e\3-webElements\22.environments.cy.js" --browser edge --headed  stage.config.js
//npx cypress run --spec "cypress\e2e\3-webElements\22.environments.cy.js" --browser edge --headed    prod.config.js


//second way
//npx cypress run --spec "cypress\e2e\3-webElements\22.environments.cy.js" --browser edge --headed --config-file stage.config.js
//npx cypress run --spec "cypress\e2e\3-webElements\22.environments.cy.js" --browser edge --headed --config-file prod.config.js

//third way
//third way to create short cut command
// create below script command in package.json
// "stage-env-test" : "npx cypress run --spec cypress/e2e/3-webElements/22.environments.cy.js --browser edge --headed --config-file stage.config.js",
// "prod-env-test" : "npx cypress run --spec cypress/e2e/3-webElements/22.environments.cy.js --browser edge --headed --config-file prod.config.js",
 
//and run following command on click
//npm run stage-env-test
//npm run prod-env-test