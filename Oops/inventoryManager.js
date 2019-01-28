/************************************************************
 * Execution    :   1. cmd> node inventoryManager.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon inventoryManager.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to edit the inventory data management file of json.
 * 
 * @description
 * 
 * @file        :   inventoryManager.js
 * @overview    :   to edit the inventory data management file of json.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   25-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const fileStream = require('fs')
var acess = fileStream.readFileSync('stock.json')
var object = JSON.parse(acess)

var util = require('../Oops/OopsUtility/OopsUtil')
var ans = 0;
while (ans < 5) {
    console.log('press 1 to add stock')
    console.log('press 2 to delete stock')
    console.log('press 3 to print stock')
    console.log('press 4 to exit')
    var read = require('readline-sync')
    ans = read.questionInt('enter any number')
    while (isNaN(ans) || ans <= 0) {
        console.log('enter valid number')
        ans = read.questionInt('enter any number')
    }
    switch (ans) {
        case 1: util.addData(object)
            break;
        case 2:util.deleteData(object)
            break;
        case 3:util.displayData(object)
            break;
    }
    if (ans == 4) {
        break;
    }
    else
    {
        console.log('enter valid input')
    }

}
