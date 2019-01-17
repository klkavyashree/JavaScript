/************************************************************
 * Execution    :   1. cmd> node temperature.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon temperature.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :  To find temperature.
 * 
 * @description
 * 
 * @file        :   temperature.js
 * @overview    :   find temperature using formula
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
var temp=read.questionInt("enter 1 to convert into temperature to fahrenhit or 2 to convert to farahanhit to temoperature");

util.convertTemperature(temp,read);