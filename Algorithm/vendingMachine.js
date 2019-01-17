/************************************************************
 * Execution    :   1. cmd> node vendingMachine.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon vendingMachine.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :  To count how many notes need to get the required amount.
 * 
 * @description
 * 
 * @file        :   vendingMachine.js
 * @overview    :   count notes that are in the machine to get required amount
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
var amount=read.question("enter the amount u need");

util.vendingMachine(amount,0,0);