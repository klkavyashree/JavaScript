/************************************************************
 * Execution    :   1. cmd> node bublesortString.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon bublesortString.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   sort strings using bublesort algorithm
 * 
 * @description
 * 
 * @file        :  bublesortString.js
 * @overview    :  sorting of strings in ascending order.
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const util = require('../UtilPrgms/Utility');

const read = require('readline-sync');
var arrayLength = read.questionInt("enter the arraylength ");
var array = [];
for (let index = 0; index < arrayLength; index++) {
    var value = read.question("enter the string ");
    while (!isNaN(value)) 
    {

        console.log("enter valid string");
        var value = read.question("enter the string  ");

    }
    array.push(value);
}
var ans = util.bubblesort(array);
console.log(ans);