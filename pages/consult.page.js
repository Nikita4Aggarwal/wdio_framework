/*
Consulation Page
*/

const elementUtil = require('../util/elementUtil');
const constants = require('../constants');
const path = require('path');
const configData =require('../config');



class ConsultPage{

//page locators:
get chatInput() {return  $('#chat-text-input')}
get sendBtn() {return $('#chat-send-message')}
//get chatInputPictureBtn() {return $('#chat-image-input')} 
get chatInputPictureVisibleBtn(){return $('div.ChatInput__send-picture')}
get chatInputPictureHiddenBtn(){return $('#chat-image-input')}
//get chatInputPicture(){return $('#chat-image-input')}
get chatInputPicturePreview() {return $('.ChatInput--preview .ChatInput__image-preview')}
get fillFormBtn(){return $('.Button.primary.medium')}

//page actions:
doTypeChatMessage(consultationMsg){
  return elementUtil.doSetValue(this.chatInput, consultationMsg)
}

doAttachPicture(){
   const filePath =path.join(__dirname, configData.fileToUpload)
 //const filePath = configData.fileToUpload
   const remoteFilePath = browser.uploadFile(filePath)
 //elementUtil.doScrollIntoView(this.chatInputPictureBtn)
   browser.execute(function(){
   document.getElementById('chat-image-input').style.display='block';
   })
   this.chatInputPictureHiddenBtn.waitForDisplayed()
   elementUtil.doSetValue(this.chatInputPictureHiddenBtn,remoteFilePath)
}

doClickOnSendBtn(){
   elementUtil.doWaitForEnabled(this.sendBtn)
   return elementUtil.doClick(this.sendBtn)
}

doClicktoOpenForm(){
    elementUtil.doScrollIntoView(this.fillFormBtn)
    elementUtil.doClick(this.fillFormBtn)
}


}
module.exports = new ConsultPage()








