const loginPage = require('../../pages/login.page');
const termsOfServicePage = require('../../pages/termsOfService.page');
const homePage = require('../../pages/home.page');
const consultPage = require('../../pages/consult.page');
const configData =require('../../config');
const constants = require('../../constants');
const medicalProfilePage =require('../../pages/MedicalProfile.page');
const logindata = require('../../testdata/logindata');
const medicalProfiledata = require('../../testdata/medicalProfiledata');

describe('verify filling required fields in Medical profile', function(){

    it('verify login Telus Virtual Health Care and Navigate to ConsultationPage', async function(){
        browser.url('/')
        browser.maximizeWindow()
        loginPage.doLogin(configData.username, configData.password)
        console.log("Login Successfull")
        await expect(browser).toHaveUrl(constants.HOME_PAGE_URL)
        homePage.getConsultation()
        await expect(browser).toHaveTitle(constants.CONSULTATION_PAGE_TITLE)
    })

    it('verify Medical Profile Appears', async function(){
        consultPage.doClicktoOpenForm()
        await expect(medicalProfilePage.profileModalHeader).toHaveTextContaining(constants.MEDICAL_PROFILE_HEADER)
        medicalProfilePage.doClickNextBtn()
    })

    it('verify filling contact number', async function(){
        medicalProfilePage.doPhoneNumInput(medicalProfiledata.phoneNumber)
         await expect(medicalProfilePage.phoneNumberInput).toHaveAttributeContaining('value',medicalProfiledata.phoneNumber)
    })

    it('verify filling address', async function(){
         medicalProfilePage.doAddressInput(medicalProfiledata.address)
         await expect(medicalProfilePage.addressInput).toHaveAttributeContaining('value',medicalProfiledata.address)
    })

    it('verify filling unit number', async function(){
         medicalProfilePage.doUnitInput(medicalProfiledata.unit)
         await expect(medicalProfilePage.unitInput).toHaveAttributeContaining('value',medicalProfiledata.unit)  
    })

    it('verify filling city', async function(){
         medicalProfilePage.doCityInput(medicalProfiledata.city)
         await expect(medicalProfilePage.cityInput).toHaveAttributeContaining('value',medicalProfiledata.city)   
    })

    it('verify filling province', async function(){
         medicalProfilePage.doProvinceInput(medicalProfiledata.province)
         await expect(medicalProfilePage.provinceInput).toHaveTextContaining(medicalProfiledata.province)
    })

    it('verify filling postal code', async function(){
         medicalProfilePage.doPostalCodeInput(medicalProfiledata.postal)
         await expect(medicalProfilePage.postalCodeInput).toHaveAttributeContaining('value',medicalProfiledata.postal) 
         medicalProfilePage.doClickNextBtn()
    })

    it('verify filling health card details', async function(){
         medicalProfilePage.doHealthCardInput(medicalProfiledata.healthCardNum)
         await expect(medicalProfilePage.healthCardInput).toHaveAttributeContaining('value',medicalProfiledata.healthCardNum)
         medicalProfilePage.doClickNextBtn()
         browser.pause(5000)
    })

    it('verify step4 in medical profile', async function(){
         await expect(medicalProfilePage.step4MedicalProfile).toHaveTextContaining(constants.STEP_4_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()
    })

    it('verify step5 in medical profile', async function(){
         await expect(medicalProfilePage.step5MedicalProfile).toHaveTextContaining(constants.STEP_5_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()
         browser.pause(5000)
    })

    it('verify step6 in medical profile', async function(){
         await expect(medicalProfilePage.step6MedicalProfile).toHaveTextContaining(constants.STEP_6_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()
    })

    it('verify step7 in medical profile', async function(){
         await expect(medicalProfilePage.step7MedicalProfile).toHaveTextContaining(constants.STEP_7_MEDICAL_PROFILE_HEADER)
         medicalProfilePage.doClickNextBtn()
    })

    it('verify medical profile submission', async function(){
         await expect(browser).toHaveTitle(constants.CONSULTATION_PAGE_TITLE)
    })

    })