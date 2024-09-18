export default class MyOhrmpage {
    selector = {
        url: 'https://practicetestautomation.com/practice-test-login/',
        userName: '[name="username"]',
        password: '[name="password"]',
        loginBtn: '[id="submit"]',
        vaild: 'h1'

    }

    Loginpage(un, pw) {
        cy.visit(this.selector.url)
        cy.get(this.selector.userName).type(un)
        cy.get(this.selector.password).type(pw)
        cy.get(this.selector.loginBtn).click()
    }

    validation() {
        cy.get(this.selector.vaild).should('have.text', "Logged In Successfully")
    }


}