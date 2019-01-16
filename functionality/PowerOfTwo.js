/************************************************************
 * Execution    :   1. cmd> node PowerOfTwo.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon PowerOfTwo.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get the powers of 2 from 1 to required range.
 * 
 * @description
 * 
 * @file        :   PowerOfTwo.js
 * @overview    :   Iterate from 1 to range mean while print the power of it.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility'); // importing from utilty function

var read=require('readline-sync'); // scan input
var n=read.questionInt("enter n value to find power of 2");
util.powerOf2(n);

