///<reference types = 'cypress' />
import HOMEP from "../Pages/2.login"
import userD from "../../../fixtures/contact3.json"

describe('verify contact us page using pom pages', () => {
    let homePage = new HOMEP()
    it('contact us page', () => {
        homePage.visitUrl()
        homePage.loginPage('kartiki', 'kode', 'kartiki@gmail.com', 'i am learning pom')
        homePage.loginSuccess()

    })

    it('contact us page', () => {
        homePage.visitUrl()
        homePage.loginPage('kartiki', 'kode', 'kartikikgmail.com', 'i am learning pom')
        homePage.loginError()

    })
    userD.forEach((el, indx) => {
        it(`contact us page using fixture payload for user ${el.firstName}`, () => {
            homePage.visitUrl()
            homePage.loginPage(el.firstName, el.lastName, el.email, el.msg)
            homePage.loginSuccess()

        })
    })
})