class ElementUtil{

     /*
     Contains all utilities
   */

async doClick(element){
     await element.waitForDisplayed()
     await element.waitForClickable()
     await element.click()
}

//Elements states (enabled,displayed) utility
async doIsDisplayed(element){
    await element.waitForDisplayed()
    return await element.isDisplayed()
}

async doWaitForEnabled(element){  
    await element.waitForEnabled()   
}

// Text/Value Manipulation Utility
async doSetValue(element, value){
     await element.waitForExist()
     await element.waitForDisplayed()
     await element.setValue(value)

}
async doClearValue(element){
    await element.waitForDisplayed()
    await element.clearValue()

}

async doGetText(element){
    await element.waitForDisplayed()
    return element.getText()

}

//Scroll utility
async doScrollIntoView(element){
    await element.doScrollIntoView()
}

//Drop-down utility
async selectDropDownValue(element, value){
    element.selectByVisibleText(value)
}


}

module.exports = new ElementUtil()