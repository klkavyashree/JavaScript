/************************************************************
 * Execution    :   1. cmd> node binarySearchforStrings.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon binarySearchforStrings.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   search for the value usingbinary search method
 * 
 * @description
 * 
 * @file        :   binarySearchforStringst.js
 * @overview    :   search for the binary value.
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

const read=require('readline-sync');
var arrayLength=read.questionInt("enter the arraylength ");
var binaryarray=[];
for(let index=0;index<arrayLength;index++)
{   
var value=read.question("enter the array value ");
binaryarray.push(value);
}
console.log(binaryarray);
var key=read.question("enter the string to be check")
var ans=util.binaryString(binaryarray,key);
console.log(ans);