/************************************************************
 * Execution    :   1. cmd> node findSqrt.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon findSqrt.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to find squareroot of the non negative number using newton method 
 * 
 * @description
 * 
 * @file        :   findSqrt.js
 * @overview    :   find sqrt using newton formula
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   16-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const util=require('../UtilPrgms/Utility')
const read=require('readline-sync');
var num=read.question("enter the non neg value");
util.findSqrt(num);
