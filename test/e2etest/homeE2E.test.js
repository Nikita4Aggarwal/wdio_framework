
//End to End test : Login Telus Health Virtual Care site and start consulation and finally logout

const loginPage = require('../../pages/login.page');
const termsOfServicePage = require('../../pages/termsOfService.page');
const homePage = require('../../pages/home.page');
const consultPage = require('../../pages/consult.page');
const configData =require('../../config');
const constants = require('../../constants');
const medicalProfilePage =require('../../pages/MedicalProfile.page');
//const path = require('path');
const logindata = require('../../testdata/logindata');
const medicalProfiledata = require('../../testdata/medicalProfiledata');

describe('E2E test-Login patient site-> start Consultation->fill and submit Medical Profile -> Logout', function(){
     
    it('verify patient login', async function(){
        await browser.url('/')
        await browser.maximizeWindow()
        loginPage.doLogin(configData.username, configData.password)
        browser.pause(5000)
        await expect(browser).toHaveTitle(constants.HOME_PAGE_TITLE)
    })

    it('verify homePage url', async function(){
        await expect(browser).toHaveUrl(constants.HOME_PAGE_URL)
    })
    
    it('verify start or continue consultation', async function(){
        homePage.getConsultation()
        await expect(browser).toHaveTitle(constants.CONSULTATION_PAGE_TITLE)
    })

    it('verify consultation chat box works', async function(){
        //browser.pause(5000)
        consultPage.doTypeChatMessage(configData.message)
        consultPage.doClickOnSendBtn()
        await expect(consultPage.sendBtn).toBeDisabled()    
    })

    // it('verify consultation attach image works in chatbox', async function(){
        
    //     consultPage.doAttachPicture()
    //     // await expect(consultPage.sendBtn).toBeDisplayed()
    //     // consultPage.doClickOnSendBtn()
    //     await expect(consultPage.chatInputPicturePreview).toHaveAttributeContaining('alt','Uploaded image preview')
    //     console.log("File Uploaded successfully")
        
    // })

    it('verify Medical Profile Modal Appears', async function(){
        consultPage.doClicktoOpenForm()
        await expect(medicalProfilePage.profileModalHeader).toHaveTextContaining(constants.MEDICAL_PROFILE_HEADER)
       // browser.pause(5000)
        medicalProfilePage.doClickNextBtn()
    })

    it('verify filling required fields in Medical profile', async function(){
        //fill the medical profile
        browser.pause(5000)
         medicalProfilePage.doPhoneNumInput(medicalProfiledata.phoneNumber)
         await expect(medicalProfilePage.phoneNumberInput).toHaveAttributeContaining('value',medicalProfiledata.phoneNumber)
        
         medicalProfilePage.doAddressInput(medicalProfiledata.address)
         await expect(medicalProfilePage.addressInput).toHaveAttributeContaining('value',medicalProfiledata.address)

         medicalProfilePage.doUnitInput(medicalProfiledata.unit)
         await expect(medicalProfilePage.unitInput).toHaveAttributeContaining('value',medicalProfiledata.unit)  

         medicalProfilePage.doCityInput(medicalProfiledata.city)
         await expect(medicalProfilePage.cityInput).toHaveAttributeContaining('value',medicalProfiledata.city)   
    
         medicalProfilePage.doProvinceInput(medicalProfiledata.province)
         await expect(medicalProfilePage.provinceInput).toHaveTextContaining(medicalProfiledata.province)
        

         medicalProfilePage.doPostalCodeInput(medicalProfiledata.postal)
         await expect(medicalProfilePage.postalCodeInput).toHaveAttributeContaining('value',medicalProfiledata.postal) 
         medicalProfilePage.doClickNextBtn()
         
         medicalProfilePage.doHealthCardInput(medicalProfiledata.healthCardNum)
         await expect(medicalProfilePage.healthCardInput).toHaveAttributeContaining('value',medicalProfiledata.healthCardNum)
         medicalProfilePage.doClickNextBtn()

         await expect(medicalProfilePage.step4MedicalProfile).toHaveTextContaining(constants.STEP_4_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()

         await expect(medicalProfilePage.step5MedicalProfile).toHaveTextContaining(constants.STEP_5_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()

         await expect(medicalProfilePage.step6MedicalProfile).toHaveTextContaining(constants.STEP_6_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()

         await expect(medicalProfilePage.step7MedicalProfile).toHaveTextContaining(constants.STEP_7_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()
         
     })

    it('verify Medical profile modal closes', async function(){
        medicalProfilePage.doClickCloseBtn()
        await expect(medicalProfilePage.profileModalHeader).not.toHaveAttributeContaining('class', 'Modal__content')
    })

    it('verify patient logout', async function(){
        loginPage.doLogout()
        await expect(browser).toHaveTitle(constants.LOGIN_PAGE_TITLE)  
    })
    

})