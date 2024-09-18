///<reference types="cypress"/>
import page from "../Pages/TestLogin"
import userD from "../../../fixtures/TestLogin.json"
describe('orangeHRM login', () => {
    let MyP = new page()
    userD.forEach((el) => {
        it('userlogin', () => {
            MyP.Loginpage(el.un, el.pw)
            MyP.validation()
        })
    })
})