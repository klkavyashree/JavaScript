/************************************************************
 * Execution    :   1. cmd> node inventory.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon inventory.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   by using inventory file of json calculating all grains cost.
 * 
 * @description
 * 
 * @file        :   inventory.js
 * @overview    :   calculating total value of all grains using json.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   25-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const fileStream=require('fs')
const acess=fileStream.readFileSync('inventory.json')//reading file from the inventory file

const read=require('../Oops/OopsUtility/OopsUtil')
var object=JSON.parse(acess);//parsing string of json into object
function inventory()
{
  read.inventory(object);//calling inventory function of file
}
inventory();
