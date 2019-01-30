/************************************************************
 * Execution    :   1. cmd> node Stock.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Stock.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to calculate the share info of customer.
 * 
 * @description
 * 
 * @file        :   Stock.js
 * @overview    :   to calculate the share info of customer.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   28-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const read = require('readline-sync')
const util = require('../../Oops/StockClass/classUtil')//calling util function
const fileStream = require('fs')
const json = fileStream.readFileSync('stock.json')
var object = JSON.parse(json)//parsing the json file
for (let key in object.Stock) {
    var name = object.Stock[key].name//assighning name from json file into the stock class file
    var share = object.Stock[key].share//assighning share from json file into the stock class file
    var price = object.Stock[key].price//assighning price from json file into the stock class file
    var stock = new util.Stock(name, share, price)//creating object of stock class
    console.log(stock.addValue(share, price))
}



