/*
Terms of Service
*/

const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class TermsOfService{

    //page locators:
    get termsOfServiceCheckbox() {return  $('#i-agree')}
    get submitTermsOfServiceBtn() {return $('#code-submit')}
    
    //page actions:   
    getAcceptanceOfTermsOfService(){
         elementUtil.doClick(this.termsOfServiceCheckbox)
         elementUtil.doClick(this.submitTermsOfServiceBtn)
     }}

module.exports = new TermsOfService()