// staging@gmail.com
// Kartiki@1234

const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://practice.automationtesting.in/'
    },
    env: {
        userid: 'staging@gmail.com',
        passw: 'Kartiki@1234'
    }

})