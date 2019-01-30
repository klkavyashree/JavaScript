/************************************************************
 * Execution    :   1. cmd> node adressBook.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon adressBook.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to add and edit all the details of the persons into the addressbook.
 * 
 * @description
 * 
 * @file        :   adressBook.js
 * @overview    :  to add and edit all the details of the persons into the addressbook.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   27-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
var read = require('readline-sync')
var util = require('../Oops/OopsUtility/OopsUtil')
var fileStream = require('fs')
var json = fileStream.readFileSync('addressBook.json')
var object = JSON.parse(json)
var input = 0;
while (input < 8) {
    console.log('press 1 to add information to adressbook')
    console.log('press 2 to update information to adressbook')
    console.log('press 3 to remove information to adressbook')
    console.log('press 4 to sort information based on last name')
    console.log('press 5 to sort information based on zipcode')
    console.log('press 6 to print information present in adressbook')
    console.log('press 7 to exit')
    var input = read.questionInt('enter your inuput')
    switch (input) {
        case 1: util.addToAddressBook(object)
            break;
        case 2: util.updateBook(object)
            break;
        case 3: util.removeFromBook(object)
            break;
        case 4: util.sortOnName(object)
            break;
        case 5: util.sortOnZipCode(object)
            break;
        case 6: util.displayAddressBook(object)
            break;

    }
    if (input == 7) {
        console.log('thank you')
        break;
    }


}
