/*
Login Page
*/

const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class LoginPage{

//page locators:
get username() {return  $('#credentials-email')}
get password() {return  $('#credentials-password')}
get signInBtn() {return  $('#credentials-submit')}
get logoutBtn() {return  $('#nav-logout')}
get loginErrorMsg() {return $('div.ErrorMessage>ul>li')}

//page actions
isForgotPwdLinkExist(){
   return elementUtil.doIsDisplayed(this.forgotPwdLink)
}

doLogin(emailId, pwd){
    elementUtil.doSetValue(this.username, emailId)
    elementUtil.doSetValue(this.password, pwd)
    elementUtil.doGetText(this.signInBtn)
    elementUtil.doClick(this.signInBtn)
}

doLogout(){elementUtil.doClick(this.logoutBtn)}

}

module.exports = new LoginPage()