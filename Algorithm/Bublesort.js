/************************************************************
 * Execution    :   1. cmd> node Bublesort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Bublesort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   sort values using bubblesort algorithm.
 * 
 * @description
 * 
 * @file        :   Bublesort.js
 * @overview    :   sorting of values in ascending order..
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
var array=[];
for(let index=0;index<arrayLength;index++)
{   
var value=read.questionInt("enter the array value ");
array.push(value);
}
var ans=util.bubblesort(array);
console.log(ans);