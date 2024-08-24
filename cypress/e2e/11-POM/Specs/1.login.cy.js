///<reference types="cypress"/>
import Homep from "../Pages/1.login"

describe('verify the WD login credentials', function () {
    let HP = new Homep()

    it('verify the CU page', () => {
        HP.visitUrl()

        HP.loginDetails('Kartiki', 'Kode', 'kartiki@gmail.com', 'I am learning POM')

        HP.validation()
    })
})