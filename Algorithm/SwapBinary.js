/************************************************************
 * Execution    :   1. cmd> node SwapBinary.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon swapBinary.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   convert decimal value into binary 
 * 
 * @description
 * 
 * @file        :   SwapBinary.js
 * @overview    :   take user input as number and convert it into binary
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
var num = read.questionInt("enter the decimal value ");
while(num<0)
{
    console.log("enter the positie value and it should be integer");
    num=read.questionInt("enter number again");
}

var binValue=util.convertToBinary(num);
util.binaryToDecimal(binValue);



