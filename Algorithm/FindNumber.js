/************************************************************
 * Execution    :   1. cmd> node FindNumber.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon FindNumber.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   find assumed number of the user by asking yes or no and range of the value.
 * 
 * @description
 * 
 * @file        :   FindNumber.js
 * @overview    :   find assumed value of user
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   16-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const util=require('../UtilPrgms/Utility');
const read = require('readline-sync');
var low = read.questionInt("enter the low value ");
var high = read.questionInt("enter the high value ");
var res=util.findNumber(low,high,read);
console.log("assumed value is"+res)
