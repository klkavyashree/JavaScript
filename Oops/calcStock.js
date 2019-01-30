/************************************************************
 * Execution    :   1. cmd> node calcStock.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon calcStock.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Find the total value of the stock.
 * 
 * @description
 * 
 * @file        :   calcStock.js
 * @overview    :   calculating the each stock value and total stock value.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   25-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const fileStream = require('fs')//accesing filesystem
const jsonFile = fileStream.readFileSync('stock.json')//acessing object json
var object = JSON.parse(jsonFile)//parsing json object into JSobject

var acess = require('../Oops/OopsUtility/OopsUtil')//acessing file
acess.calculateStock(object);
