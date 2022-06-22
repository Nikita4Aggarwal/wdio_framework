/* 
Forgot Password Page
*/

const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class ForgotPasswordPage{

    //page locators
    get forgotPwdLink() {return  $('=Forgot your password?')}
    get forgotPwdPageHeader(){return $('//h1[text()="Forgot your password?"]')}
    get forgotPwdEmailInput (){return $('#forgot-email')}
    get resetPwdBtn(){return $('#submit-email')}
    get acknowledgeMsg(){return $(`//h1[text()="Success!"]`)}
    get contactUsLink(){return $('=contact us')}

    //page actions
    doClickOnForgotPassword(){elementUtil.doClick(this.forgotPwdLink)}

    doResetPassword(emailAdd){
        elementUtil.doSetValue(this.forgotPwdEmailInput, emailAdd)
        elementUtil.doClick(this.resetPwdBtn)
    }
    
    doClickOnContactUs(){elementUtil.doClick(this.contactUsLink)}
}

module.exports = new ForgotPasswordPage()