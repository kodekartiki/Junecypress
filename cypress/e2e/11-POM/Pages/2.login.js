export default class homePage {
    selector = {
        url: "https://webdriveruniversity.com/Contact-Us/contactus.html",
        firstName: '[name="first_name"]',
        lastName: '[name="last_name"]',
        email: '[name="email"]',
        textBox: '[name="message"]',
        submitBtn: '[type="submit"]',
        resetBtn: '[type="reset"]',
        onSuccess: 'h1',
        errorTxt: 'Error: Invalid email address',
        successTxt: 'Thank You for your Message!'
    }

    visitUrl() {
        cy.visit(this.selector.url)
    }

    loginPage(fn, ln, em, tx) {
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(em)
        cy.get(this.selector.textBox).type(tx)
        cy.get(this.selector.submitBtn).click()
    }

    loginSuccess() {
        cy.get(this.selector.onSuccess).should('have.text', this.selector.successTxt)
    }
    loginError() {
        cy.contains(this.selector.errorTxt).should('be.visible')
    }
}