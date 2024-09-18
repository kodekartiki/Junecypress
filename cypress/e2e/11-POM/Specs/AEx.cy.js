/// <reference types='cypress' />
import homePage from "../Pages/AEx"
import data from "../../../fixtures/AExpayload"

describe("verify E2E testing", function () {
    let hp = new homePage()
    data.forEach((el, index) => {
        it('automation login test', function () {
            hp.signUp(el.name, el.email)
            hp.creataUser(el)
            hp.validation(hp.selector.accCreatedMsg, 'Account Created!')
            hp.btnClick(hp.selector.continueBtn)
            hp.btnClick(hp.selector.logout)
            hp.loginUser(el)
            hp.validateLoginUser(el)
        })
    })
})