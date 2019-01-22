/************************************************************
 * Execution    :   1. cmd> node Harmonic.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Harmonicram.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get the nth Harmonic number.
 * 
 * @description
 * 
 * @file        :   Harmonic.js
 * @overview    :   Get the Harmonic number of all the values till nth number,
 *                  and get the sum of it.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util = require('../UtilPrgms/Utility');

var read=require('readline-sync');    //scan for input
var n=read.questionInt("enter Nth harmonic value which u need to find");           //getting value frm user and assighning it to n
var res=util.findHarmonics(n);              //calling function from util 
console.log(res);
