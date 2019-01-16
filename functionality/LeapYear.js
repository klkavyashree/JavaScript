/************************************************************
 * Execution    :   1. cmd> node LeapYear.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon LeapYear.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get to know whether the given year is Leap year or not.
 * 
 * @description
 * 
 * @file        :   LeapYear.js
 * @overview    :   Check for leap year Using constraints.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util= require('../UtilPrgms/Utility');

var read=require('readline-sync');//scan for input
var year=read.questionInt("enter year should be of 4 digits");//getting user input
console.log(util.isLeapYear(year));//calling Leapyear function from utility file