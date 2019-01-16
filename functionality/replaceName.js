


/************************************************************
 * Execution    :   1. cmd> node replaceName.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Coupon.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to print string by relacing username.
 * 
 * @description
 * 
 * @file        :   replaceName.js
 * @overview    :   Use to print string by replacing the given user input.
 * @author      :   kavyashree K L <kavya.kavyashree97@gmsil.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util= require('../UtilPrgms/Utility');//importing function from util

var read=require('readline-sync');//scan for input
var name=read.question("enter the name ");//getting user input
var username=util.validateName(name);
var res=util.stringReplace(username);

console.log(res);