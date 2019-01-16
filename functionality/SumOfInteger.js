/************************************************************
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 * Execution    :   1. cmd> node SumOfInteger.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon SumOfInteger.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To find the triplets whose sum is equal to Zero.
 * 
 * @description
 * 
 * @file        :   SumOfInteger.js
 * @overview    :   For all permutation of the string find the distinct triplets whose sum equals Zero.
 * @author      :   Kavyashree K l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
var i=read.questionInt("enter the array length of the array");
var arr=[];
while(arr.length!=i)
{
    var value=read.questionInt("enter the value");
    
    arr.push(value);
}
//console.log(arr);
util.checkSumEqualToZero(arr);
