/************************************************************
 * Execution    :   1. cmd> node Payment.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Payment.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to find the monthly-payment and prints the results 
 * 
 * @description
 * 
 * @file        :   Payment.js
 * @overview    :   take command line input of principle and year and rate 
    *and find the monthly payment 
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
var principle = read.questionInt("enter the principle value ");
var year = read.questionInt("enter the year value ");
var rate= read.questionInt("enter the rate value ");
util.findPayment(principle,year,rate);

