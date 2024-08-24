export default class homepage {
    selector = {
        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName: '[name="first_name"]',
        lastName: '[name="last_name"]',
        email: '[name="email"]',
        msg: '[name="message"]',
        submitBtn: '[type="submit"]',
        SuccessH1: 'h1'
    }

    visitUrl() {
        cy.visit(this.selector.url)
    }

    loginDetails(fn, ln, em, txt) {
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(em)
        cy.get(this.selector.msg).type(txt)
        cy.get(this.selector.submitBtn).click()
    }

    validation() {
        cy.get(this.selector.SuccessH1).should('have.text', 'Thank You for your Message!')
    }
}