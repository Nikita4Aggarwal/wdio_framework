/*
Home Page
*/

const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class HomePage{

//page locators:
get consultBtn() {return  $('#start-or-continue-consult')}

//page actions:   
getConsultation(){elementUtil.doClick(this.consultBtn)}
}

 module.exports = new HomePage()