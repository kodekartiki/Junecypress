// production@gmail.com
// Kartiki@123

const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://practice.automationtesting.in/'
    },
    env: {
        userid: 'production@gmail.com',
        passw: 'Kartiki@123'

    }

})