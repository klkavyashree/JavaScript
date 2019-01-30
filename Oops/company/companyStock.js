/************************************************************
 * Execution    :   1. cmd> node companyStock.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon companyStock.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to add and update the share info of customer and company.
 * 
 * @description
 * 
 * @file        :   companyStock.js
 * @overview    :   to add and update the share info of customer and company.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   25-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
var read = require('readline-sync')
var fileStream = require('fs')
var companyJson = fileStream.readFileSync('companyStock.json', 'utf8')
var companyObject = JSON.parse(companyJson)//parsing the file into the object
var customerJson = fileStream.readFileSync('customerStock.json', 'utf8')
var customerObject = JSON.parse(customerJson)//parsing the file into the object
var util = require('../../Oops/OopsUtility/OopsUtil')
var input = 0;
while (input < 8) {//if the input is less than 8 then it will ask to choose one of the options
    console.log("press 1 to add to companyStock")
    console.log('press 2 to add to customerStock')
    console.log('press 3 to sell share to company')
    console.log('press 4 to remove company')
    console.log('press 5 to show details of the companyStock')
    console.log('press 6 to show details of the customersock')
    console.log("press 7 to exit")
    input = read.questionInt('enter ur choice - ')
    switch (input) {
        case 1: util.addToCompanyStock(companyObject)
            break;
        case 2: util.addToCustomerStock(customerObject, companyObject)
            break;
        case 3: util.sellShare(companyObject, customerObject)
            break;
        case 4: util.removeCompany(companyObject)
            break;
        case 5: util.showDetailsOfCompany(companyObject)
            break;
        case 6: util.showDetailsOfCustomer(customerObject)
            break;

    }
    if (input == 7) {//if the input is 7 then controlflow will come out of the loop
        console.log('thank you')
        break;
    }


}
