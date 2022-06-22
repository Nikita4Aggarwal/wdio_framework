//Test login with different username and passwords

const loginPage = require('../../pages/login.page');
const configData =require('../../config');
const constants = require('../../constants');
const loginData = require('../../testdata/logindata');
const assert    = require("assert")

describe('Login Tests', function(){

    it('verify login with incorrect username and correct password', async function(){
        await browser.url('/')
        browser.maximizeWindow()
        console.log('verify login with Incorrect username and Correct password')
        loginPage.doLogin(loginData.incorrectUsername, loginData.correctPassowrd)
        console.log("logging.......")
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(constants.INCORRECT_EMAIL_PWD_MSG)
        
    })

    it('verify login with correct username and incorrect password', async function(){
        await browser.url('/')
        console.log('verify login with Correct username and Incorrect password')
        loginPage.doLogin(loginData.correctUSername, loginData.incorrectPassword)
        console.log("logging.......")
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(constants.INCORRECT_EMAIL_PWD_MSG)
        
    })

    it('verify login with unregistered username and unregistered password', async function(){
        await browser.url('/')
        console.log('verify login with Unregistered username and password')
        loginPage.doLogin(loginData.unregisteredUsername, loginData.unregisteredPassword1)
        console.log("logging.......")
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(constants.INCORRECT_EMAIL_PWD_MSG)
        
    })
    
    it('verify login with invalid username and password', async function(){
        await browser.url('/')
        console.log('verify login with invalid username and password')
        loginPage.doLogin(loginData.invalidUsername, loginData.invalidPassword)
        console.log("loging.......")
       // await loginPage.loginErrorMsg.waitForExist({timeout: 5000})
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(constants.INCORRECT_EMAIL_PWD_MSG)
        
    })

    it('verify login with valid username and password', async function(){
        await browser.url('/')
        loginPage.doLogin(configData.username, configData.password)
        browser.pause(3000)
        await expect(browser).toHaveTitle(constants.HOME_PAGE_TITLE)
      
    })
    
    



})