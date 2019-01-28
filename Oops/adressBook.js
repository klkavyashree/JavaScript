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
        case 2:util.updateBook(object)
            break;
        case 3:util.removeFromBook(object)
            break;
        case 4:util.sortOnName(object)
            break;
        case 5:util.sortOnZipCode(object)
            break;
        case 6:util.displayAddressBook(object)
            break;

    }
    if (input == 7) {
        console.log('Thank You')
        break;
    }
    else
    {
        console.log("enter valid input")
    }

}
