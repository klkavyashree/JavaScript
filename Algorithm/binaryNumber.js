/************************************************************
 * Execution    :   1. cmd> node binaryNumber.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon binaryNumber.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   search for the value usingbinary search method
 * 
 * @description
 * 
 * @file        :   binaryNumber.js
 * @overview    :   search for the binary value.
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const util=require('../UtilPrgms/Utility');

const read=require('readline-sync');
var arrayLength=read.questionInt("enter the arraylength ");
var binaryArray=[];
for(let index=0;index<arrayLength;index++)
{   
var value=read.questionInt("enter the array value ");
binaryArray.push(value);
}
var binaryArray=util.bubblesort(binaryArray);
var key=read.questionInt("enter the value to be check")

var ans=util.binarySearch(binaryArray,key);
console.log(ans);