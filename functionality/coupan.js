/************************************************************
 * Execution    :   1. cmd> node Coupon.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Coupon.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To generate the unique coupon numbers.
 * 
 * @description
 * 
 * @file        :   coupon.js
 * @overview    :   Use random numbers to generate coupon numbers.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');
var read = require('readline-sync');
var n = read.questionInt("needed coupans are? ");
if(n>1)
{
var count=util.coupanCount(n);//calling function from util class
console.log(count);//print to the console
}
else{
    console.log("enter number greater than 1");//print to the console
}