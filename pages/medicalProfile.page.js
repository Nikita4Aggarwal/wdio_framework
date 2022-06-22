/*
Medical Profile
*/
const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class MedicalProfilePage{

//page locators:
get profileModalHeader() {return  $('//h2[text() ="Medical Profile"]')}
// get nextBtn() {return  $('#profile-submit-button')}
get nextBtn() {return  $('//span[text()="Next"]')}
get medicalProfileCloseBtn() {return $('//button[@aria-label="Close"]')}
get phoneNumberInput() {return  $('#phoneNumber')}
get addressInput() {return  $('#addressLine1')}
get unitInput() {return  $('#addressLine2')}
get cityInput() {return  $('#city')}
get postalCodeInput() {return  $('#postalCode')}
get provinceInput() {return $('#select-contact-province')}
get healthCardInput() {return $('#healthCardNumber')}
get step4MedicalProfile() {return $('//h1[text() ="Step 4 of 7"]')}
get step5MedicalProfile() {return  $('//h1[text() ="Step 5 of 7"]')}
get step6MedicalProfile() {return  $('//h1[text() ="Step 6 of 7"]')}
get step7MedicalProfile() {return  $('//h1[text() ="Step 7 of 7"]')}

//page actions
doClickNextBtn(){return elementUtil.doClick(this.nextBtn)}

doPhoneNumInput(inputValue){elementUtil.doSetValue(this.phoneNumberInput,inputValue)}

doUnitInput(inputValue){elementUtil.doSetValue(this.unitInput,inputValue)}

doAddressInput(inputValue){elementUtil.doSetValue(this.addressInput,inputValue)}

doCityInput(inputValue){elementUtil.doSetValue(this.cityInput,inputValue)}

doCountryInput(inputValue){elementUtil.doSetValue(this.countryInput,inputValue)}

doProvinceInput(inputValue){
    elementUtil.doScrollIntoView(this.provinceInput)
    elementUtil.selectDropDownValue(this.provinceInput, inputValue)  
}

doPostalCodeInput(inputValue){
    elementUtil.doScrollIntoView(this.postalCodeInput)
    elementUtil.doSetValue(this.postalCodeInput,inputValue)
}

doHealthCardInput(inputValue){
    elementUtil.doScrollIntoView(this.healthCardInput)
    elementUtil.doClearValue(this.healthCardInput)
    elementUtil.doSetValue(this.healthCardInput,inputValue)   
}
      
doClickCloseBtn(){elementUtil.doClick(this.medicalProfileCloseBtn)}

}

module.exports = new MedicalProfilePage()