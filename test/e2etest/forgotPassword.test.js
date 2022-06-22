// Test Forgot Password Scenario

const forgotPasswordPage = require('../../pages/forgotPassword.page')
const configData =require('../../config');
const constants = require('../../constants');

describe('Forgot password tests', function(){

    it('verify Forgot Password link', async function(){
        await browser.url('/')
        await browser.maximizeWindow()
        forgotPasswordPage.doClickOnForgotPassword()
        await expect(forgotPasswordPage.forgotPwdPageHeader).toHaveTextContaining(constants.FORGOT_PWD_HEADER) 
    })

    it('verify reset password', async function(){
        forgotPasswordPage.doResetPassword(configData.recoveryemail)
        browser.pause(3000)
        //await forgotPasswordPage.acknowledgeMsg.waitForDisplayed({timeout:5000})
        await expect(forgotPasswordPage.acknowledgeMsg).toBeDisplayed()
        await expect(forgotPasswordPage.acknowledgeMsg).toHaveTextContaining(constants.RESET_PWD_SUCCESS_MSG)
    })

    it('verify contact us link', async function(){
        await forgotPasswordPage.contactUsLink.waitForClickable({timeout:7000})
        await expect(forgotPasswordPage.contactUsLink).toBeDisplayed()
        forgotPasswordPage.doClickOnContactUs()
    })
})

